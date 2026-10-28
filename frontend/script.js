const API_BASE_URL = 'https://harvesthub-o8k9.onrender.com';
document.addEventListener('DOMContentLoaded', () => {
    // Navigation & Tab Switching
    const navItems = document.querySelectorAll('.sidebar-menu .nav-item');
    const sections = document.querySelectorAll('.app-section');
    const breadcrumbPage = document.getElementById('breadcrumbPage');
    
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        sections.forEach(sec => sec.classList.remove('active'));
        const activeSection = document.getElementById(targetId);
        if (activeSection) {
          activeSection.classList.add('active');
        }
        
        if (breadcrumbPage) {
          breadcrumbPage.textContent = item.querySelector('span').textContent;
        }
      });
    });

    // Render Yield Analytics Chart via Chart.js safely
    const ctx = document.getElementById('plantThroughputChart');
    if (ctx) {
      // Prevent "Canvas is already in use" error by destroying previous chart instance
      let existingChart = Chart.getChart(ctx);
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
          datasets: [{
            label: 'Estimated Crop Growth Index (%)',
            data: [25, 38, 52, 64, 78, 89, 96],
            borderColor: '#15803d',
            backgroundColor: 'rgba(21, 128, 61, 0.08)',
            fill: true,
            tension: 0.35,
            borderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: '#15803d'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { grid: { color: '#f1f5f9' }, ticks: { color: '#64748b', font: { size: 11 } } },
            x: { grid: { display: false }, ticks: { color: '#64748b', font: { size: 11 } } }
          }
        }
      });
    }

    // --- BACKEND INTEGRATION: Fetch & Display Products from Spring Boot ---
    const cropCatalogGrid = document.getElementById('cropCatalogGrid');

    async function fetchProducts() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/products`);
        if (!response.ok) throw new Error('Failed to fetch products from backend');
        const products = await response.json();
        
        if (cropCatalogGrid) {
          cropCatalogGrid.innerHTML = '';
          if (products.length === 0) {
            cropCatalogGrid.innerHTML = '<p style="color:var(--text-muted); padding:20px;">No crops found in database. Click "Add New Crop" to add one.</p>';
            return;
          }
          products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card crop-item-card';
            card.innerHTML = `
              <div class="crop-header-badge bg-green">${product.category || 'Agricultural Item'}</div>
              <h3>${product.name}</h3>
              <p class="crop-scientific">Stock Qty: ${product.quantity} units</p>
              <div class="crop-details">
                <div class="detail-row"><span>Unit Price:</span> <strong>$${product.price}</strong></div>
                <div class="detail-row"><span>Database ID:</span> <strong>#${product.id}</strong></div>
                <div class="detail-row"><span>Status:</span> <strong style="color:var(--status-success)">Synced with MySQL</strong></div>
              </div>
            `;
            cropCatalogGrid.appendChild(card);
          });
        }
      } catch (error) {
        console.error('Error connecting to Spring Boot backend:', error);
        if (cropCatalogGrid) {
          cropCatalogGrid.innerHTML = `<p style="color:var(--status-danger); padding:20px;">Could not connect to backend server at ${API_BASE_URL}</p>`;
        }
      }
    }

    // Call fetch on page load
    fetchProducts();

    // --- BACKEND INTEGRATION: Add Crop / Product dynamically via POST ---
    const addCropBtn = document.getElementById('addCropBtn');
    if (addCropBtn) {
      addCropBtn.addEventListener('click', async () => {
        const name = prompt("Enter Crop / Product Name (e.g., Organic Barley):");
        if (!name) return;
        const category = prompt("Enter Category (e.g., Cereal / Grain):") || "General Crop";
        const price = parseFloat(prompt("Enter Unit Price ($):") || "10.0");
        const quantity = parseInt(prompt("Enter Quantity:") || "100");

        const newProduct = { name, category, price, quantity };

        try {
          const response = await fetch(`${API_BASE_URL}/api/products`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
          });

          if (response.ok) {
            alert(`Successfully saved ${name} to the backend database!`);
            fetchProducts(); // Refresh grid view automatically
          } else {
            alert('Failed to save product to backend.');
          }
        } catch (err) {
          console.error('Network error:', err);
          alert(`Could not connect to backend server at ${API_BASE_URL}`);
        }
      });
    }

    // Sidebar Mobile Toggle
    const sidebar = document.getElementById('sidebar');
    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
    
    if (sidebarToggleBtn && sidebar) {
      sidebarToggleBtn.addEventListener('click', () => { sidebar.style.transform = 'translateX(0)'; });
    }
    if (sidebarCloseBtn && sidebar) {
      sidebarCloseBtn.addEventListener('click', () => { sidebar.style.transform = 'translateX(-100%)'; });
    }
});