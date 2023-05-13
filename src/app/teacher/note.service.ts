import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
   baseUrl: string = 'http://localhost/php/';
   baseurl2: string = 'http://localhost/php/searchs.php';


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
  searchStudents(searchText: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseurl2}?searchTerm=${searchText}`);
  }

  
}
