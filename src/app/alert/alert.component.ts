import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from "./alert.service";
import {Subscription} from "rxjs";

let input = Input;

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() id!: string;

  private alertSubscription!: Subscription;

  public alertsContainer: any = [];

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertSubscription = this.alertService.subscribeOnConcreteAlerts(this.id).subscribe(alert => {
      if (!alert) return;

      this.alertsContainer.push(alert);
    })
  }

  ngOnDestroy(): void {
    this.alertSubscription.unsubscribe();
  }
}
