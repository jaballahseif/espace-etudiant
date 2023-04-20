import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost/php/';
  private currentUserSubject: BehaviorSubject<User|null>;
  public currentUser: Observable<User|null>;

  constructor(private http: HttpClient , private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User|null>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(email: string, password: string): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<User>(this.baseUrl + 'login.php', { email, password }, { headers }).pipe(
      map(user => {
        if (user && user.role) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      })
    );
  }

  public get currentUserValue(): User|null {
    return this.currentUserSubject.value;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('/login');
  }
  
  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  isAdmin(): boolean {
    const currentUser = this.getCurrentUser();
    console.log('Current User:', currentUser);
    return currentUser && currentUser.role === 'admin';
  }

  isTeacher(): boolean {
    const currentUser = this.getCurrentUser();
    return currentUser && currentUser.role === 'enseignant';
  }

  isStudent(): boolean {
    const currentUser = this.getCurrentUser();
    return currentUser && currentUser.role === 'etudiant';
  }
}