# Blog Platform with Comments

A full-stack blog platform that allows users to register, log in, create blog posts, edit and delete their own posts, and interact through comments. This project is built as an internship project to demonstrate full-stack web development, RESTful APIs, and user interaction.

---

## Features

### User Authentication
- User Registration
- User Login
- Password Encryption using bcrypt
- Secure Authentication

### Blog Management
- Create Blog Posts
- View All Blog Posts
- View Single Blog Post
- Edit Blog Posts
- Delete Blog Posts

### Comment System
- Add Comments
- View Comments
- Delete Comments

### Backend Features
- RESTful APIs
- Express.js Server
- JSON File Storage
- Modular Project Structure

---

## Tech Stack

### Frontend
- React.js
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Authentication
- bcryptjs

### Data Storage
- JSON Files

### Development Tools
- VS Code
- Git
- GitHub
- Thunder Client / Postman

---

## Project Structure

```
BlogPlatform
│
├── client
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── data
│   │   ├── users.json
│   │   ├── posts.json
│   │   └── comments.json
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/blog-platform.git
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm start
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Blog Posts

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/posts | Get All Posts |
| GET | /api/posts/:id | Get Single Post |
| POST | /api/posts | Create Post |
| PUT | /api/posts/:id | Update Post |
| DELETE | /api/posts/:id | Delete Post |

### Comments

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/comments/:postId | View Comments |
| POST | /api/comments/:postId | Add Comment |
| DELETE | /api/comments/:id | Delete Comment |

---

## Learning Outcomes

- Full-Stack Web Development
- RESTful API Development
- CRUD Operations
- User Authentication
- Backend Development with Express.js
- React Frontend Integration
- Git & GitHub Version Control
- Content Management System Development

---

## Future Enhancements

- JWT Authentication
- User Profile
- Blog Categories
- Search Functionality
- Rich Text Editor
- Image Upload
- Like and Dislike System
- Admin Dashboard
- Dark Mode
- MongoDB Integration

---

## Author

**KANCHARLA LIKITHA**

B.Tech – Computer Science and Business Systems (CSBS)

RMK Engineering College

---

## License

This project is developed for educational and internship purposes.
