import { Injectable } from '@angular/core';
import {filter, pipe, Subject} from "rxjs";
import {Alert} from "./alert.model";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alertSubject: Subject<Alert> = new Subject();

  public subscribeOnConcreteAlerts(id: string) {
    return this.alertSubject.asObservable().pipe(filter(x => x && x.id === id));
  }

  success(id: string) {
    this.alert(new Alert({ id, message: "Success"}));
  }

  alert(alert: Alert) {
    this.alertSubject.next(alert);
  }
}
