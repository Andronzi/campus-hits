import {Injectable} from '@angular/core';
import {filter, Subject} from "rxjs";
import {Alert, AlertType, IAlertOptions} from "./alert.model";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private defaultId = "default-id";
  public alertSubject: Subject<Alert> = new Subject();

  public subscribeOnConcreteAlerts(id = this.defaultId) {
    return this.alertSubject.asObservable().pipe(filter(x => x && x.id === id));
  }

  success(message: string, options?: IAlertOptions) {
    this.alert(new Alert({ message, type: AlertType.Success, ...options }));
  }

  alert(alert: Alert) {
    alert.id = alert.id || this.defaultId;
    this.alertSubject.next(alert);
  }
}
