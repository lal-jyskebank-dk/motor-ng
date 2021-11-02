import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MotorService {
  constructor(private httpClient: HttpClient) {}

  getRegistrationPlate(registrationPlate: string): Observable<any> {
    const url = `${environment.MOTOR_BASE_URL}${registrationPlate}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'X-AUTH-TOKEN': environment.MOTOR_API_TOKEN,
      }),
    };

    return this.httpClient.get(url, httpOptions);
  }
}
