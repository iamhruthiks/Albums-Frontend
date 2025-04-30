# 📁 Project Title: Albums-Frontend

## 💡 Overview

**Albums-Frontend**  is a dynamic and user-friendly frontend interface built with React.js for managing photo albums. It empowers users to seamlessly interact with their personal photo collections - allowing them to create albums, add photos, and perform full CRUD operations with ease. The app is designed with a clean and responsive UI to deliver a smooth experience across all devices.

---

## ✨ Features

- **User Authentication**: Secure login and registration integrated with the backend.
- **Album Management**: Users can create, view, edit, and delete albums.
- **Photo CRUD Operations**: Add, update, delete, and view photos inside each album.
- **Download Functionality**: Photos can be downloaded with a single click.
- **Responsive Design**: Optimized for desktops, tablets, and mobile screens using Bootstrap.
- **Clean UI & UX**: Focused on usability and intuitive navigation.
- **Seamless API Integration**: Communicates with a Spring Boot backend via REST APIs.

---

## 🛠️ Tech Stack Used

- **Framework**: React.js  
- **Styling**: Bootstrap, CSS
- **Scripting**: JavaScript, HTML5  
- **Others**: Axios (for API calls), React Router

---

## 🚀 How to Run the Frontend Application

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### **Open your terminal or command prompt.**

### Clone the Repository

```bash
git clone https://github.com/iamhruthiks/Albums-Frontend.git
```

### Navigate inside Project Directory

```bash
cd Albums-Frontend
```

### Configure Secret Properties
Create a .env file in the root of projcet directory and add:

```bash
REACT_APP_VERSION = v1
GENERATE_SOURCEMAP = false
REACT_APP_BASE_URL = http://localhost:8080
```

### Install Dependencies

```bash
npm install
```

### Start the Frontend Application

```bash
npm start
```

### Access the Application

- App: `http://localhost:3000`

_💡 Note: To interact with the app, make sure your [backend](https://github.com/iamhruthiks/Albums-API-Backend) is running._

---

## 📁 Project Structure


- `/components`: Reusable UI components like Navbar, AlbumCard, PhotoGrid, etc.

- `/pages`: Main pages including Login, Register, Dashboard, AlbumDetails

- `/client`: Axios API methods to communicate with the backend

- `/assets`: Static files like icons or images

- `/App.js`: Main application router

- `/index.js`: Entry point of the app

---

## 🌐 Deployment

- 🌱 The frontend application is deployed on **Vercel**.  
- 🔴 **Live App**: https://albums-frontend.vercel.app
- 👤 **Guest Login for Demo**:  
  You can use the following credentials to explore the app without registering:  
  - **Email**: `user@user.com`  
  - **Password**: `password`  
  _(Note: This is a demo account for exploration purposes only.)_

---

## 📜 Acknowledgements

_This project was developed as one of my the **capstone projects** for the course **"FULL STACK JAVA DEV: JAVA + JSP + SPRING + BOOT + JS + REACT"**._

_I extend my heartfelt thanks to **Chand Sheikh** and the **StudyEasy Organization** for creating such a comprehensive and engaging learning experience. The course's practical, project-driven approach and clear explanations were instrumental in equipping me with the skills and confidence to bring this application to life. It has been a pivotal step in my journey to becoming a full-stack Java developer._

---

## 📷 Screenshots
<img width="959" alt="login" src="https://github.com/user-attachments/assets/294fce6e-d805-44ed-9d27-3991cc016a28"><hr>
<img width="959" alt="sign up" src="https://github.com/user-attachments/assets/993cf560-e344-4982-a91f-c5d753032cb0"><hr>
<img width="959" alt="dashboard(empty)" src="https://github.com/user-attachments/assets/773132c8-e7e9-40cd-be85-c0bf7a5d5626"><hr>
<img width="959" alt="add albums" src="https://github.com/user-attachments/assets/b5bc682c-7a12-40b1-bb37-dae550b1c8d7"><hr>
<img width="959" alt="dashboard" src="https://github.com/user-attachments/assets/472feccb-378e-4654-8e23-11aa880de8b5"><hr>
<img width="959" alt="inside album (empty)" src="https://github.com/user-attachments/assets/adc6f78f-7cf5-4a2c-8e2f-c27b26b5cacd"><hr>
<img width="959" alt="upload photo" src="https://github.com/user-attachments/assets/b46b63c6-fcfa-42b2-a962-5acb9c4c507b"><hr>
<img width="959" alt="inside album" src="https://github.com/user-attachments/assets/7add80d1-38e9-4858-bbd3-cd7ac280a8c0"><hr>
<img width="959" alt="view photo" src="https://github.com/user-attachments/assets/872953ce-3e80-4509-b6c9-b5feb2c82e04"><hr>
<img width="959" alt="download photo" src="https://github.com/user-attachments/assets/a0346a07-0876-4a3c-8ab9-4ebc7e9de806"><hr>
<img width="959" alt="inside album" src="https://github.com/user-attachments/assets/a179bcac-7d43-477f-b7dd-9c9a8dd73409"><hr>
<img width="959" alt="responsive design 1" src="https://github.com/user-attachments/assets/d4e9e93a-dde0-4484-ace4-fc1cffceb25d"><hr>
<img width="959" alt="responsive design 2" src="https://github.com/user-attachments/assets/03686ad7-a873-4358-a1ae-25f0fe2bcf41"><hr>
