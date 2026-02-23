# 🏡 Adventurelust

[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge&logo=vercel)](https://adventurelust.vercel.app/)

> **Adventurelust** — A responsive hotel's listing web application where users can register, login, add/view house listings, and edit the listing image or other details. Customer can see the location of the hotel. Built with modern backend technologies.  

---

## 📸 Screenshots

| Home Page | Add House Page | Sign Up Page |
|-----------|----------------|---------------|
| ![Home](https://github.com/Sujit0604/Adventurelust/blob/main/Screenshot%202026-02-23%20222738.png) | ![Add House](https://github.com/Sujit0604/Adventurelust/blob/main/Screenshot%202026-02-23%20222856.png) | ![Sign In](https://github.com/Sujit0604/Adventurelust/blob/main/Screenshot%202026-02-23%20222945.png) |

---

## ✨ Features

- 🔐 User registration and login
- 🏠 Add new house listings  
- 🔍 Browse and view available houses     
- 📱 Fully responsive design with Bootstrap  
- 🖼  Dynamic templates rendered with EJS  
- 🌐 map view by mapbox

---

## 🧰 Tech Stack

- **Frontend:** CSS, JavaScript, Bootstrap  
- **Backend:** EJS, Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** passport.js (using passport-local)  

---

## 📂 Project Structure
```base
Adventurelust/
├─ controllers/
├─ init/            # for sample data
├─ models/
├─ public/          # CSS, JS
│  ├─ CSS/
│  └─ js/
├─ routes/
├─ utils
├─ views/           # EJS templates
│  ├─ includes/
│  ├─ layouts/
│  ├─ listings/
│  └─ users/
├─ .env        
├─ app.js
├─ cloudeConfig.js
├─ middleware.js
├─ package.json
├─ README.md
├─ screenshots/
└─ schema.js
```
---
## ♻️ Deployment

### Adventurelust can be deployed on Render, Vercel, or any Node.js hosting service.

*Run the Application*:

1. Install dependencies: npm install

2. Start server: node app.js

3. Static files and EJS templates would serve via Express 

---
## ⚙️ Environment Variables
```
CLOUD_NAME= 
CLOUD_API_KEY= 
CLOUD_API_SECRET= 
MAP_TOKEN= 
ATLASDB_URL= 
SECRET= 
```
---
## 🤝 Contributing

### Fork the repository.

---
## 🚀 Getting Started
# Clone repo
```
git clone https://github.com/Sujit0604/Adventurelust.git
cd Adventurelust

# Install dependencies
npm install

# Start backend server
node app.js

# Open in browser at http://localhost:8080/
```
