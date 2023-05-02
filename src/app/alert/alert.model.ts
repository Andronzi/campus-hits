export class Alert {
  id?: string;
  message?: string;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}
