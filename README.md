# Task Manager

A full-stack, role-based task management application built with React, TypeScript, Express, PostgreSQL, and Prisma. Users manage their own tasks, while administrators can oversee all tasks and manage user accounts.

A containerized version with Docker Compose and Nginx is available in the [Task Manager Dockerized repository](https://github.com/RemyAthisayaa17/task-manager-dockerized).

## Overview

Task Manager provides a centralized way to manage tasks with authentication, role-based permissions, ownership checks, and audit fields.

Regular users can create, view, update, and complete their own tasks. Administrators have broader visibility across users and tasks, along with user management capabilities.

## Features

- **Authentication:** User registration and login using JWT authentication.
- **Role-based access control:** Separate permissions for administrators and regular users.
- **Task management:** Create, view, update, and soft-delete tasks, with ownership checks.
- **Task dashboard:** Search by title, filter by status, view task counts, and navigate paginated results.
- **Admin dashboard:** View users, inspect individual user details, and manage user accounts.
- **Data integrity:** Soft deletion and audit fields to preserve record history.
- **Request validation:** Zod validation on the backend and Yup with React Hook Form on the frontend.
- **Protected routes:** Separate public and authenticated navigation.
- **Centralized error handling:** Consistent handling of API errors and HTTP status codes.

## How It Works

1. **Authentication:** Users register or log in and receive a JWT for authenticated requests.
2. **Task lifecycle:** Tasks are created with a `pending` status and can be marked `completed`.
3. **Ownership enforcement:** Regular users can access their own tasks, while administrators can access tasks across users.
4. **User administration:** Administrators can list users, view user details, and soft-delete accounts.
5. **Record tracking:** Records include audit fields such as `createdBy`, `updatedBy`, and timestamps, where configured.

## Tech Stack

| Area | Technologies |
|---|---|
| Frontend | React 18, TypeScript, Vite, Tailwind CSS |
| Routing and forms | React Router, React Hook Form, Yup |
| API communication | Axios |
| Backend | Node.js, Express, TypeScript |
| Database | PostgreSQL |
| ORM | Prisma |
| Authentication | JWT, bcrypt |
| Backend validation | Zod |
| Notifications | react-hot-toast |

## API Reference

All endpoints use the `/api` prefix.

| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/api/auth/register` | Public | Register an account |
| POST | `/api/auth/login` | Public | Authenticate and receive a JWT |
| GET | `/api/tasks` | Authenticated | Retrieve paginated tasks with supported filters |
| POST | `/api/tasks` | Authenticated | Create a task |
| GET | `/api/tasks/:id` | Owner or admin | Retrieve a task |
| PUT | `/api/tasks/:id` | Owner or admin | Update a task |
| DELETE | `/api/tasks/:id` | Owner or admin | Soft-delete a task |
| GET | `/api/admin/users` | Admin | List users |
| GET | `/api/admin/users/:id` | Admin | Retrieve user details |
| DELETE | `/api/admin/users/:id` | Admin | Soft-delete a user and associated tasks |

The task listing endpoint supports pagination and filters such as `page`, `limit`, `search`, `status`, and `userRole`, subject to the backend implementation.

## Database

The application uses PostgreSQL with Prisma ORM.

The primary models are:

- **User:** Stores user and account information.
- **Task:** Stores task details and its relationship to the owning user.

Prisma schema and migration files are maintained in `backend/prisma/`.

## Getting Started

### Prerequisites

- Node.js and npm
- PostgreSQL
- Git

### 1. Clone the repository

```bash
git clone https://github.com/RemyAthisayaa17/task-manager.git
cd task-manager
```

### 2. Configure the backend

```bash
cd backend
npm install
```

Create a `backend/.env` file:

```env
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/task_manager
JWT_SECRET=replace_with_a_secure_secret
JWT_EXPIRES_IN=1d
PORT=5000
```

Replace the database credentials and secret with your local configuration.

### 3. Set up the database

Create the `task_manager` database in PostgreSQL, then run:

```bash
npx prisma migrate dev
npm run seed
```

The seed command creates the administrator account according to `prisma/seed.ts`.

Use the credentials and configuration defined by the project's seed implementation. Change any default administrator password before using the application beyond local development.

### 4. Start the backend

```bash
npm run dev
```

The backend should run on the port configured by your application, `5000` in the example environment above.

### 5. Configure the frontend

Open a second terminal:

```bash
cd frontend
npm install
```

Create a `frontend/.env` file:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### 6. Start the frontend

```bash
npm run dev
```

Open the local URL printed by the frontend development server.

> **Note:** Confirm the actual frontend and backend ports from the project configuration before following these instructions. Ensure the frontend API URL matches the backend address.

## Project Structure

```text
task-manager/
├── backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   └── src/
│       ├── routes/
│       ├── controllers/
│       ├── services/
│       ├── middleware/
│       ├── validation/
│       └── constants/
└── frontend/
    └── src/
        ├── pages/
        ├── components/
        ├── hooks/
        ├── api/
        ├── context/
        └── validation/
```

## Future Improvements

- Implement refresh token rotation.
- Add task due dates, priorities, and assignment between users.
- Introduce automated service-layer tests.
- Add `.env.example` files for easier local setup.

---

**Related project:** [Task Manager — Dockerized](https://github.com/RemyAthisayaa17/task-manager-dockerized)
