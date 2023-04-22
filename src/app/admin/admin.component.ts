import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  selectedMenuItem: string = 'dashboard';


  email: String;
  constructor(private authService: AuthService) { 
    this.email = this.authService.email();
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
  }

}
