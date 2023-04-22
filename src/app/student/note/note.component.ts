import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Notes } from './note';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes: Notes[] = [];

  constructor(private authService: AuthService,private http: HttpClient ) {}

  ngOnInit() {
    const studentId = this.authService.getid();
  
    this.http.get<any[]>(`http://localhost/php/view-note.php?student_id=${studentId}`).subscribe(
      (data) => {
        this.notes = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
  
}
