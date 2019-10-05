import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  get(url) {
    const token = localStorage.getItem('github_token');

    if (token) {
      let headers = new HttpHeaders();
      headers  = headers.append('Authorization', `token ${token}`);

      return this.http.get(url, { headers });
    } else {
      this.router.navigate(['/']);
      return throwError('No access token');
    }
  }

  post(url, data) {
    return this.http.post(url, data);
  }
}
