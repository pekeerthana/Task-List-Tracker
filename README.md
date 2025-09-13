# ToDo List Tracker

A full-stack web application to manage your daily tasks efficiently. Built with a modern React frontend and a robust Spring Boot backend, ToDo List Tracker helps you stay organized, productive, and motivated.

## Features

- ✨ **Add, Edit, Delete Tasks:** Manage your to-do items with ease.
- 📋 **Task Status Tracking:** Mark tasks as complete or pending.
- 🔍 **Search & Filter:** Quickly find tasks by keywords.
- 🕒 **Persistent Storage:** All tasks are securely stored in a database.
- ⚡ **Responsive UI:** Works seamlessly on desktop and mobile devices.
- 🔗 **RESTful API:** Clean separation between frontend and backend for scalability.

## Tech Stack

- **Frontend:** React, Vite, CSS
- **Backend:** Spring Boot, Java, Maven
- **Database:** (Specify your DB, e.g., H2, MySQL)
- **API:** RESTful endpoints

## Getting Started

### Prerequisites

- Node.js & npm
- Java 17+ & Maven

### Backend Setup

```bash
cd TaskList_Backend/keeper
./mvnw spring-boot:run
```

### Frontend Setup

```bash
cd TaskList_Frontend
npm install
npm run dev
```

### Access the App

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:8080](http://localhost:8080)

## Project Structure

```
TaskList_Backend/
  keeper/
    src/
      main/
        java/com/example/keeper/
          controller/
          model/
          repository/
          service/
      resources/
TaskList_Frontend/
  src/
    components/
    service/
  public/
```

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
