import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {
  constructor(private http: HttpClient) {}

  gitHubAuth(code: {code: string}) {
    return this.http.post('/api/github-auth', code);
  }
}
