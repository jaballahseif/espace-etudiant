import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  email: String;
  constructor(private authService: AuthService) { 
    this.email = this.authService.email();
  }

  ngOnInit(): void {
  }
  selectedMenuItem: string = 'dashboard';



  logout(): void {
    this.authService.logout();
  }


}