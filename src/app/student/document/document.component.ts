import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-documents',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  files: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    this.http.get<string[]>('http://localhost/php/view-document.php').subscribe({
      next: (response) => {
        this.files = response;
      },
      error: (error) => {
        console.log('Error fetching files:', error);
      }
    });
  }
  downloadFile(file: string) {
    window.open(`http://localhost/php/uploads/${file}`, '_blank');
  }
}
