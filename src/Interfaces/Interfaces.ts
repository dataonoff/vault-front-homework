export type Unit = 'ETH' | 'XTZ' | 'XRP';
export interface ITransactionDetails {
  amount: number;
  from: string;
  id: number;
  to: string;
  unit: Unit;
}

export interface IAccount {
  id: number;
  name: string;
  currency: string;
}

export type NotificationType = 'TRANSACTION_RECEIVED' | 'TRANSACTION_SENT' | 'ACCOUNT_CREATED';
export interface INotifications {
  id: string;
  type: NotificationType;
  data: ITransactionDetails | IAccount;
}
