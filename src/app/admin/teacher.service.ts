import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  baseUrl: string = 'http://localhost/php/'
  baseUrl1: string = 'http://localhost/php/teacher-list.php';
  baseurl2: string = 'http://localhost/php/searcht.php';

  constructor(private httpClient: HttpClient) { }
  getTeacher(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl1);
  }
  deleteTeacher(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete-teacher.php?id=${id}`;
    return this.httpClient.delete(url);
  }
  updateTeacher(id: number, teacher: any) {
    const { fname, lname, email } = teacher;
    return this.httpClient.put(`${this.baseUrl}/edit-teacher.php?id=${id}`, { fname, lname, email });
  }
  public addTeacher(
    fname: string, 
    lname: string, 
    email: string, 
    password: string,
  ) {
    return this.httpClient.post<any>(this.baseUrl + '/add-teacher.php',
      { fname, lname, email, password}
    ).pipe(
      map((response) => {
        return response;
      })
    );
  }
  searchTeachers(searchText: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseurl2}?searchTerm=${searchText}`);
  }
}
