import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '@prisma/client';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private readonly API_URL = 'http://localhost:3333/api';

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.API_URL);
  }
}
