export type Accounts = Root2[];

export interface Root2 {
  attributes: Attributes;
}

export interface Attributes {
  id: number;
  user_id: number;
  name: string;
  balance: number;
}
