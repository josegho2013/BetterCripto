import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      throw error;
    }
    return throwError(() => error);
  };

  getAllCoins(): Observable<any> {
    return this.http
      .get<any>(`https://api.coingecko.com/api/v3/coins/list`)
      .pipe(
        map((data: any) => {
          console.log('data', data);
          return data;
        }),
        catchError(this.handleError)
      );
  }
}
