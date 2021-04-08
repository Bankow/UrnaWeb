import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Candidate } from '../entities/candidate';

@Injectable()

export class CandidateService {
  readonly baseUrl = `https://localhost:44360/Candidate/`;

  constructor(private http: HttpClient) { }

  public getCandidate(candidateSubtitle: string): Observable<Candidate> {
    const result = this.http.get(this.baseUrl+candidateSubtitle).pipe(
      map((response: Candidate) => {
        return response;
      }));

    return result;
  }

  public GetAll(): Observable<Candidate[]> {
    const result = this.http.get(this.baseUrl+'getAll').pipe(
      map((response: Candidate[]) => {
        return response;
      }));

    return result;
  }

  public Delete(candidateId: number): Observable<string> {
    const result = this.http.delete(this.baseUrl+candidateId).pipe(
      map((response: string) => {
        return response;
      }));

    return result;
  }

  public Create(candidate: Candidate): Observable<Candidate> {
    const result = this.http.post(this.baseUrl, candidate).pipe(
      map((response: Candidate) => {
        return response;
      }));

    return result;
  }
}
