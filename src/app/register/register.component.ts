import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.minLength(1)]],
      lname: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]],
      role: ['', Validators.required]
    });
    
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.authService.register(
        this.registerForm.value.fname,
        this.registerForm.value.lname,
        this.registerForm.value.email,
        this.registerForm.value.password,
        this.registerForm.value.role
      )
        .pipe(first())
        .subscribe(
          response => {
            if (response.message === 'success') {
              Swal.fire("Thank you...",'Your Account has been created successfully','success');
              // Registration successful, redirect to home page
              this.router.navigate(['/login']);
            } else {
              // User already registered, redirect to login page
              Swal.fire(
                'Oh no!',
                'This email is already registered, please try again!',
                'question'
              );      this.router.navigate(['/register']);
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
  

  ngOnInit(): void {}
}
