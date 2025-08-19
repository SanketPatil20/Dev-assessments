import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Student {
  _id?: string;
  name: string;
  email: string;
  course: string;
  createdAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:3000'; // Node.js API URL

  constructor(private http: HttpClient) { }

  // Get all students from the API
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/students`);
  }

  // Get a single student by ID
  getStudent(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/student/${id}`);
  }

  // Add a new student
  addStudent(student: Student): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-student`, student);
  }

  // Health check
  checkHealth(): Observable<any> {
    return this.http.get(`${this.apiUrl}/health`);
  }
}
