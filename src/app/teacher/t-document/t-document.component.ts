import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-t-document',
  templateUrl: './t-document.component.html',
  styleUrls: ['./t-document.component.css']
})
export class TDocumentComponent {
  selectedFile: File | null | undefined;
  uploadSuccess: boolean = false;
  uploadError: boolean = false;


  constructor(private http: HttpClient) { }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }
  

  onSubmit() {
    const formData = new FormData();
    if(this.selectedFile){
    formData.append('file', this.selectedFile, this.selectedFile.name);}

    this.http.post<any>('http://localhost/php/add-file.php', formData).subscribe(
      (response) => {
        console.log(response);
        this.uploadSuccess = true;
        this.uploadError = false;
      },
      (error) => {
        console.log(error);
        this.uploadSuccess = false;
        this.uploadError = true;
      }
    );
  }
}
