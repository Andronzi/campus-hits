import {Component, OnInit} from '@angular/core';
import {AlertService} from "./alert.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  public alertsContainer: any = [];

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.alertSubject.subscribe(alert => {
      if (!alert) return;

      this.alertsContainer.push(alert);
    })
  }
}
