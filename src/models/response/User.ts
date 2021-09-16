export interface User {
  attributes: Attributes;
}

export interface Attributes {
  id: number;
  name: string;
  account_ids: number[];
}
