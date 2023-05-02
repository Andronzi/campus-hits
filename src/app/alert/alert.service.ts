import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alertSubject = new Subject();

  success() {
    this.alert("success");
  }

  alert(message: string) {
    this.alertSubject.next(message)
  }
}
