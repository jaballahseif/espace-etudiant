import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl: string = 'http://localhost/php/'
  baseUrl2: string = 'http://localhost/php/student-list.php';
  baseurl2: string = 'http://localhost/php/searchs.php';


  constructor(private httpClient: HttpClient) { }

  getStudent(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl2);
  }
  deleteStudent(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete-student.php?id=${id}`;
    return this.httpClient.delete(url);
  }
  updateStudent(id: number, student: any) {
    const { fname, lname, email } = student;
    return this.httpClient.put(`${this.baseUrl}/edit-student.php?id=${id}`, { fname, lname, email });
  }
  public addStudent(
    fname: string, 
    lname: string, 
    email: string, 
    password: string,
  ) {
    return this.httpClient.post<any>(this.baseUrl + '/add-student.php',
      { fname, lname, email, password}
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
