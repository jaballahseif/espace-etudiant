import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';
import { catchError, first } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { NoteService } from '../note.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-t-note',
  templateUrl: './t-note.component.html',
  styleUrls: ['./t-note.component.css']
})
export class TNoteComponent implements OnInit {
  
  students: User[] = [];
  showModal = false;
  addnote: FormGroup;
  currentid: string= '';
  selectedStudentId: number= 0;



  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private noteService: NoteService
  ) {
    this.addnote = this.formBuilder.group({
      matiere: ['', [Validators.required, Validators.minLength(1)]],
      note: ['', [Validators.required, Validators.minLength(1)]],
    });
  }
  
  ngOnInit() {
    this.http.get<any[]>('http://localhost/php/student-list.php').subscribe(data => {
      this.students = data;
    });
  }
  
  getStudentid(id: number) {
    this.selectedStudentId = id;
  }
  onAdd() {
    console.log(this.selectedStudentId);
    if (this.addnote.valid) {
      this.noteService.addNote(
        this.authService.getid(),
        this.selectedStudentId,
        this.addnote.value.matiere,
        this.addnote.value.note,
      ) 
      .pipe(first()).
      subscribe(
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
