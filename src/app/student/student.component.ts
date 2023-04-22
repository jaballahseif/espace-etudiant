import { Component , OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
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
