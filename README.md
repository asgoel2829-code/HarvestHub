# HarvestHub 🌾

> An intelligent, full-stack web platform for agricultural management, crop planning, and live farm inventory tracking.

[![Vercel Live](https://img.shields.io/badge/DEMO-VERCEL-black?style=for-the-badge&logo=vercel)](https://harvesthub-frontend-nine.vercel.app)
[![Render Backend](https://img.shields.io/badge/API-RENDER-10b981?style=for-the-badge&logo=render)](https://harvesthub-o8k9.onrender.com)
[![License: MIT](https://img.shields.io/badge/LICENSE-MIT-yellow?style=for-the-badge)](LICENSE)

---

## 📌 Table of Contents
- [About the Project](#-about-the-project)
- [Live Links](#-live-links)
- [Key Features & Functionalities](#-key-features--functionalities)
- [Tech Stack](#-tech-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started](#-getting-started)
- [License](#-license)

---

## 📖 About the Project

**HarvestHub** is a comprehensive full-stack web platform built to connect agricultural producers, local farmers, and consumers. It combines a robust Java Spring Boot backend with an interactive web frontend, backed by a cloud MySQL database to facilitate direct listing, browsing, and management of farm products and operational workflows.

---

## 🚀 Live Links

- **Frontend Application (Vercel):** [harvesthub-frontend-nine.vercel.app](https://harvesthub-frontend-nine.vercel.app)[cite: 11]
- **Backend API (Render):** [harvesthub-o8k9.onrender.com](https://harvesthub-o8k9.onrender.com)[cite: 10]

> **Note:** The backend is hosted on Render's free tier instance. If left inactive, the initial request may experience a short cold-start delay (~50 seconds) while waking up[cite: 10].

---

## ✨ Key Features & Functionalities

### 🌾 Core Platform Features
- **Direct Marketplace:** Connects farmers and buyers without intermediate markup.
- **Product Listing & Catalog:** View, browse, and search through fresh harvest produce, crops, and agricultural goods.
- **Live Database Synchronization:** Real-time persistence and data exchange powered by TiDB Cloud MySQL.

### ⚙️ Backend Functionalities (Spring Boot)
- **RESTful API Architecture:** Clean separation of concerns powering data exchange between the frontend UI and server layer.
- **Maven Dependency Management:** Automated build process and dependency tracking via Maven Wrapper (`mvnw`)[cite: 4].
- **Scalable Service Layer:** Business logic structured under `src/main/java` for user management, product CRUD, and transactional workflows[cite: 4].

### 💻 Frontend Functionalities
- **Responsive UI:** Built with custom HTML, CSS, and dynamic JavaScript (`index.html`, `style.css`, `script.js`)[cite: 4].
- **Dynamic Client Integration:** Centralized API routing configuration communicating securely with the deployed backend server.

---

## 🛠 Tech Stack

- **Backend:** Java 17+, Spring Boot, Spring Data JPA, Hibernate, REST APIs, Maven
- **Database:** TiDB Cloud MySQL
- **Frontend:** HTML5, CSS3, JavaScript (Fetch API, Async/Await)
- **Deployment & Hosting:** Vercel (Frontend), Render (Backend)
- **Version Control:** Git, GitHub

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