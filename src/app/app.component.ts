import { Component } from '@angular/core';
import { AlertService } from "./alert/alert.service";
import { IAlertOptions } from "./alert/alert.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private alertOptions: IAlertOptions = { autoClose: true };
  constructor(private alertService: AlertService) { }

  alertAboutSuccessEvent() {
    this.alertService.success("home component", this.alertOptions);
  }
}

