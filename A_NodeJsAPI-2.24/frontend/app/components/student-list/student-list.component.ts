import { Component, OnInit } from '@angular/core';
import { StudentService, Student } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  loading = false;
  error = '';
  newStudent: Student = {
    name: '',
    email: '',
    course: ''
  };
  showAddForm = false;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  // Load all students from the API
  loadStudents(): void {
    this.loading = true;
    this.error = '';
    
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
        this.loading = false;
        console.log(`Loaded ${data.length} students`);
      },
      error: (err) => {
        this.error = 'Failed to load students. Please check if the backend server is running.';
        this.loading = false;
        console.error('Error loading students:', err);
      }
    });
  }

  // Add a new student
  addStudent(): void {
    if (!this.newStudent.name || !this.newStudent.email || !this.newStudent.course) {
      this.error = 'All fields are required';
      return;
    }

    this.studentService.addStudent(this.newStudent).subscribe({
      next: (response) => {
        console.log('Student added successfully:', response);
        this.newStudent = { name: '', email: '', course: '' };
        this.showAddForm = false;
        this.loadStudents(); // Reload the list
      },
      error: (err) => {
        this.error = 'Failed to add student';
        console.error('Error adding student:', err);
      }
    });
  }

  // Toggle add form visibility
  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
    this.error = '';
  }

  // Format date for display
  formatDate(date: Date | string): string {
    return new Date(date).toLocaleDateString();
  }
}
