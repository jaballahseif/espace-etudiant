import { Component } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-table-t',
  templateUrl: './table-t.component.html',
  styleUrls: ['./table-t.component.css']
})
export class TableTComponent {
  teachers: User[] = [];
  showModal = false;
  registerForm: FormGroup;
  searchText: any;

  constructor(private teacherService: TeacherService,
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
  updateTeacher(id: number) {
    const teacher = this.teachers.find(s => s.id_enseignant === id);
    if (!teacher) return;
  
    if (confirm('Are you sure you want to update this teacher?')) {
      this.teacherService.updateTeacher(id, teacher).subscribe((data: any) => {
        const index = this.teachers.indexOf(teacher);
        this.teachers[index] = data;
        teacher.editing = false;
  
        // Get updated data and manually update component's data
        this.teacherService.getTeacher().subscribe((data: any) => {
          this.teachers = data;
        });
      });
    }
  }
  onRegister() {
    if (this.registerForm.valid) {
      this.teacherService.addTeacher(
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
  
  
  
  ngOnInit(): void {
    this.getTeachers();
  }
  

  getTeachers() {
    this.teacherService.getTeacher().subscribe((data: User[]) => {
      this.teachers = data;
    });
  }
  deleteTeacher(id: number) {
    if (confirm('Are you sure you want to delete this teacher?')) {
      this.teacherService.deleteTeacher(id).subscribe((data: any) => {
        this.teachers = this.teachers.filter((t: User) => t.id_enseignant !== id);
      });
    }
  }
  search() {
    if (this.searchText) {
      this.teacherService.searchTeachers(this.searchText).subscribe((data: User[]) => {
        this.teachers = data;
      });
    } else {
      this.getTeachers();
    }
  }
}