import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from "./alert.service";
import {Subscription} from "rxjs";
import {Alert, AlertType} from "./alert.model";

let input = Input;

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() id = "default-id";

  private alertSubscription!: Subscription;

  public alertsContainer: Alert[] = [];

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertSubscription = this.alertService.subscribeOnConcreteAlerts(this.id)
      .subscribe(alert => {
        if (!alert) return;

        this.alertsContainer.push(alert);

        if (alert.autoClose) {
          setTimeout(() => this.removeAlert(alert), 3000);
        }
    })
  }

  ngOnDestroy(): void {
    this.alertSubscription.unsubscribe();
  }

  private removeAlert(alert: Alert) {
    if (!this.alertsContainer.includes(alert)) return;

    this.alertsContainer = this.alertsContainer.filter(x => x !== alert);
  }

  assignClasses(alert: Alert) {
    if (!alert) return;

    const classes = ['alert', 'alert-dismissible'];

    const alertTypeClass = {
      [AlertType.Success]: 'alert-success',
      [AlertType.Error]: 'alert-danger',
      [AlertType.Info]: 'alert-info',
      [AlertType.Warning]: 'alert-warning'
    }

    if (alert.type !== undefined) {
      classes.push(alertTypeClass[alert.type]);
    }

    console.log(classes);

    return classes.join(' ');
  }
}
