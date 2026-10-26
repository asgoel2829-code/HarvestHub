# HarvestHub 🌾

HarvestHub is a full-stack web platform built to connect agricultural producers, local farmers, and consumers. It combines a robust Java Spring Boot backend with an interactive web frontend to facilitate direct listing, browsing, and management of farm products.

---

## 🚀 Key Features & Functionalities

### 🌾 Core Platform Features
- **Direct Marketplace:** Connects farmers and buyers without intermediate markup.
- **Product Listing & Catalog:** View, browse, and search through fresh harvest produce, crops, and agricultural goods.
- **Order & Inventory Management:** Streamlined tracking for produce inventory and purchase updates.

### ⚙️ Backend Functionalities (Spring Boot)
- **RESTful API Architecture:** Clean separation of concerns powering data exchange between the frontend UI and server layer.
- **Maven Dependency Management:** Automated build process and dependency tracking via Maven Wrapper (`mvnw`).
- **Scalable Service Layer:** Business logic structured under `src/main/java` for user management, product CRUD, and transactional workflows.

### 💻 Frontend Functionalities
- **Responsive UI:** Built with custom HTML, CSS, and dynamic JavaScript (`index.html`, `style.css`, `script.js`).
- **Interactive Browsing:** Dynamic client-side DOM manipulation for responsive product displays and filtering without page reloads.

---

## 📂 Project Directory Structure

```text
HarvestHub/
├── backend/                  # Java Spring Boot Server
│   ├── .mvn/                 # Maven wrapper configuration[cite: 4]
│   ├── src/                  # Source code (Controllers, Services, Models)[cite: 4]
│   ├── target/               # Compiled build artifacts
│   ├── mvnw / mvnw.cmd       # Maven executable scripts[cite: 4]
│   └── pom.xml               # Spring Boot & Java dependencies[cite: 4]
│
├── frontend/                 # Client Web Application
│   ├── index.html            # Main web page structure[cite: 4]
│   ├── style.css             # Styling and responsive design[cite: 4]
│   └── script.js             # Client-side interactive logic[cite: 4]
│
└── README.md                 # Project documentation[cite: 4]