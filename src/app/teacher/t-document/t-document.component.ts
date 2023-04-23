import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-t-document',
  templateUrl: './t-document.component.html',
  styleUrls: ['./t-document.component.css']
})
export class TDocumentComponent {
  title: string = '';
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
    if (!this.title) {
      console.log('Title is required');
      return;
    }

    const formData = new FormData();
    if (this.selectedFile) {
      console.log(this.selectedFile);
      console.log(this.title);
      formData.append('file', this.selectedFile, this.selectedFile.name);
    }
    formData.append('title', this.title);

    // Call the PHP file for inserting data into the database
    this.http.post<any>('http://localhost/php/add-file.php', formData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

    // Call the PHP file for uploading files
    this.http.post<any>('http://localhost/php/upload-file.php', formData).subscribe(
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
