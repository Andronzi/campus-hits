import { Injectable } from '@angular/core';
import {filter, pipe, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alertSubject: Subject<{ id: string, message: string }> = new Subject();

  public subscribeOnConcreteAlerts(id: string) {
    return this.alertSubject.asObservable().pipe(filter(x => x && x.id === id));
  }

  success() {
    this.alert("success");
  }

  alert(message: string) {
    this.alertSubject.next({id: "default-id", message })
  }
}
