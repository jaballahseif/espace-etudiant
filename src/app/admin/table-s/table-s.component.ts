import { Component } from '@angular/core';
import { User } from 'src/app/user';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-table-s',
  templateUrl: './table-s.component.html',
  styleUrls: ['./table-s.component.css']
})
export class TableSComponent {
  students: User[] = [];
  showModal = false;
  registerForm: FormGroup;

  constructor(private studentService: StudentService,
    private router : Router,
    private formBuilder: FormBuilder,
    ) { 
      this.registerForm = this.formBuilder.group({
        fname: ['', [Validators.required, Validators.minLength(1)]],
        lname: ['', [Validators.required, Validators.minLength(1)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(1)]],

      });
    }
  
  updateStudent(id: number) {
    const student = this.students.find(t => t.id_etudiant === id);
    if (!student) return;
  
    if (confirm('Are you sure you want to update this student?')) {
      this.studentService.updateStudent(id, student).subscribe((data: any) => {
        const index = this.students.indexOf(student);
        this.students[index] = data;
        student.editing = false;

        this.studentService.getStudent().subscribe((data: any) => {
          this.students = data;
        });
      });
    }
  }
  
  
  ngOnInit(): void {
    this.getStudents();
  }
  

  getStudents() {
    this.studentService.getStudent().subscribe((data: User[]) => {
      console.log(data);
      this.students = data;
    });
  }
  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe((data: any) => {
        this.students = this.students.filter((t: User) => t.id_etudiant !== id);
      });
    }
  }
  onRegister() {
    if (this.registerForm.valid) {
      this.studentService.addStudent(
        this.registerForm.value.fname,
        this.registerForm.value.lname,
        this.registerForm.value.email,
        this.registerForm.value.password,
      )
      .pipe(first())
        .subscribe(
          response => {
            if (response.message === 'success') {
              Swal.fire("Thank you...",'Your Account has been created successfully','success');
              // Registration successful, redirect to home page
              this.ngOnInit();
             } else {
              // User already registered, redirect to login page
              Swal.fire(
                'Oh no!',
                'This email is already registered, please try again!',
                'question'
              );      this.ngOnInit();
            }
          },
          error => console.error(error)
        );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all the fields!',
      });
    }
  }
        
}
