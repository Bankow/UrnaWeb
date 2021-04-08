import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vote } from '../entities/vote';

@Injectable()

export class VoteService {
  readonly baseUrl = `https://localhost:44360/Vote`;

  constructor(private http: HttpClient) { }

  public vote(candidateId: number): Observable<boolean> {
    const result = this.http.post(this.baseUrl, candidateId).pipe(
      map((response: boolean) => {
        return response;
      }));

    return result;
  }

  public GetAll(): Observable<Vote[]> {
    const result = this.http.get(this.baseUrl).pipe(
      map((response: Vote[]) => {
        return response;
      }));

    return result;
  }
}
