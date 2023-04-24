import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
   baseUrl: string = 'http://localhost/php/';

  constructor(private httpClient: HttpClient) { }
  public addNote(
    idenseignant: any,
    idetudiant: any,
    matiere: any,
    note: any,
  ){
    return this.httpClient.post<any>(this.baseUrl + '/add-note.php',
      { idenseignant, idetudiant, matiere, note}
    ).pipe(
      map((response) => {
        return response;
      })
    );
  }
  
}
