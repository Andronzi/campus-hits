export class Alert {
  id?: string;
  message?: string;
  autoClose?: boolean;
  type?: AlertType;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}

export interface IAlertOptions {
  id?: string;
  autoClose?: boolean;
  keepAfterRouteChange?: boolean;
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning
}
