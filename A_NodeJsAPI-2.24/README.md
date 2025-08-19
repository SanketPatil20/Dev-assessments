# Node.js API + Angular Frontend Integration

This project demonstrates a complete full-stack application with a Node.js/Express backend API and an Angular frontend that communicates with it.

## 🏗️ Project Structure

```
A_NodeJsAPI-2.24/
├── backend/                 # Node.js API Server
│   ├── Models/
│   │   └── Student.js      # MongoDB Student Model
│   ├── package.json        # Backend dependencies
│   └── server.js           # Express server with API routes
└── frontend/               # Angular Application
    ├── app/
    │   ├── components/
    │   │   └── student-list/
    │   │       ├── student-list.component.ts
    │   │       ├── student-list.component.html
    │   │       └── student-list.component.css
    │   ├── services/
    │   │   └── student.service.ts
    │   ├── app.component.ts
    │   ├── app.component.html
    │   ├── app.component.css
    │   └── app.module.ts
    ├── index.html
    ├── main.ts
    ├── styles.css
    ├── angular.json
    ├── tsconfig.json
    └── package.json
```

## 🚀 Features Implemented

### Backend (Node.js/Express)
- ✅ **GET /students** - Returns list of all students
- ✅ **GET /student/:id** - Get student by ID
- ✅ **POST /add-student** - Add new student
- ✅ **GET /health** - Health check endpoint
- ✅ CORS enabled for frontend communication
- ✅ MongoDB integration with Mongoose
- ✅ Error handling and validation

### Frontend (Angular)
- ✅ **HttpClientModule** imported in app.module.ts
- ✅ **StudentService** with HTTP methods
- ✅ **StudentListComponent** with *ngFor display
- ✅ Real-time data fetching from API
- ✅ Add new student functionality
- ✅ Loading states and error handling
- ✅ Responsive design
- ✅ Modern UI with animations

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)
- Angular CLI (for frontend development)

## 🛠️ Setup Instructions

### 1. Backend Setup

```bash
# Navigate to backend directory
cd A_NodeJsAPI-2.24/backend

# Install dependencies
npm install

# Start MongoDB (make sure MongoDB is running)
# On Windows: Start MongoDB service
# On Mac/Linux: mongod

# Start the backend server
npm start
# or for development with auto-restart
npm run dev
```

The backend will run on `http://localhost:3000`

### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd A_NodeJsAPI-2.24/frontend

# Install dependencies
npm install

# Start the Angular development server
npm start
```

The frontend will run on `http://localhost:4200`

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/students` | Get all students |
| GET | `/student/:id` | Get student by ID |
| POST | `/add-student` | Add new student |
| GET | `/health` | Health check |

### Example API Usage

```bash
# Get all students
curl http://localhost:3000/students

# Add a new student
curl -X POST http://localhost:3000/add-student \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","course":"Computer Science"}'

# Get student by ID
curl http://localhost:3000/student/[student-id]
```

## 🎯 Key Implementation Details

### 1. HttpClientModule Import
```typescript
// app.module.ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,  // ✅ Required for HTTP requests
    FormsModule
  ],
  // ...
})
```

### 2. Student Service
```typescript
// services/student.service.ts
export class StudentService {
  private apiUrl = 'http://localhost:3000';

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/students`);
  }
}
```

### 3. Component with *ngFor
```typescript
// components/student-list/student-list.component.ts
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students = data;  // ✅ Store in local array
      }
    });
  }
}
```

```html
<!-- student-list.component.html -->
<div *ngFor="let student of students" class="student-card">
  <h3>{{ student.name }}</h3>
  <p>{{ student.email }}</p>
  <p>{{ student.course }}</p>
</div>
```

## 🎨 UI Features

- **Modern Design**: Clean, responsive interface
- **Loading States**: Spinner during API calls
- **Error Handling**: User-friendly error messages
- **Add Form**: Toggle-able form for adding students
- **Card Layout**: Grid display of student information
- **Hover Effects**: Interactive elements with animations
- **Mobile Responsive**: Works on all device sizes

## 🔍 Testing the Integration

1. **Start both servers** (backend on port 3000, frontend on port 4200)
2. **Open browser** to `http://localhost:4200`
3. **Add students** using the "Add New Student" button
4. **View the list** - students will appear in real-time
5. **Refresh the list** using the refresh button
6. **Test error handling** by stopping the backend server

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**: Make sure the backend has CORS enabled
2. **MongoDB Connection**: Ensure MongoDB is running on port 27017
3. **Port Conflicts**: Check if ports 3000 or 4200 are already in use
4. **Module Errors**: Run `npm install` in both directories

### Debug Tips

- Check browser console for frontend errors
- Check terminal for backend server logs
- Use browser Network tab to monitor API calls
- Verify MongoDB connection in backend logs

## 📚 Learning Outcomes

This project demonstrates:
- **Full-stack development** with Node.js and Angular
- **API integration** using Angular HttpClient
- **Component architecture** and service patterns
- **Real-time data binding** and state management
- **Error handling** and user experience design
- **Responsive design** principles

## 🚀 Next Steps

Potential enhancements:
- Add authentication and authorization
- Implement CRUD operations (Update, Delete)
- Add search and filtering functionality
- Implement pagination for large datasets
- Add form validation and error handling
- Implement real-time updates with WebSockets
