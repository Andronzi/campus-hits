export class Alert {
  id?: string;
  message?: string;
  autoClose?: boolean;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}

export interface IAlertOptions {
  id?: string;
  autoClose?: boolean;
  keepAfterRouteChange?: boolean;
}
