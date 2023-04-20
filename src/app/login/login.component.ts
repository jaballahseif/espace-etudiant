import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string | undefined;


  constructor(private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    {
      this.authService.login(email, password).subscribe(
          user => {
              if (user && user.role) {
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  if (user.role === 'admin') {
                      this.router.navigate(['/admin']);
                      setTimeout(function() {
                        window.location.href = '/admin';
                      }, 500);
                  } else if (user.role === 'enseignant') {
                      this.router.navigate(['/teacher']);
                      setTimeout(function() {
                        window.location.href = '/teacher';
                      }, 500);
                  } else if (user.role === 'etudiant') {
                      this.router.navigate(['/student']);
                      setTimeout(function() {
                        window.location.href = '/student';
                      }, 500);
                  }
              }
              if(user.message == 'success'){
                
              }else{
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Wrong Credantials!',
                });
              }
          },
          error => {
              this.errorMessage = error.message;
              
          }
      );
      
  }
}

  ngOnInit(): void {}
}