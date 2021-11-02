import { Component } from '@angular/core';
import { MotorService } from './motor.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  registrationNumber: string = '';
  registrationNumberResponse: string = '';

  constructor(private motorService: MotorService) {}

  onSubmitSearch() {
    this.motorService
      .getRegistrationPlate(this.registrationNumber)
      .pipe(first())
      .subscribe(
        (response) => {
          this.registrationNumberResponse = response;
        },
        (error) => {
          this.registrationNumberResponse = error;
        }
      );
  }
}
