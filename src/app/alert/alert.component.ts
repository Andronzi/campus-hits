import {Component, Input, OnInit} from '@angular/core';
import {AlertService} from "./alert.service";

let input = Input;

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() id!: string;
  public alertsContainer: any = [];

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.subscribeOnConcreteAlerts(this.id).subscribe(alert => {
      if (!alert) return;

      this.alertsContainer.push(alert);
    })
  }
}
