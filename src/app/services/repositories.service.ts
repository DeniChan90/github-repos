import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  constructor( private http: HttpService) {}

  getRepositories() {
   return this.http.get(`/api/github-repos`);
  }
}
