export enum ActionTypes {
  LOAD_REQUEST = '@API/LOAD_REQUEST',
  LOAD_SUCCESS = '@API/LOAD_SUCCESS',
  LOAD_FAILURE = '@API/LOAD_FAILURE',
  FAKE_LOADING = '@API/FAKE_LOADING',
}

export interface SaleRecord {
  cogs: number;
  id: string;
  city: string;
  'customer-type': string;
  gender: string;
  'product-line': string;
  'unit-price': number;
  quantity: number;
  tax: number;
  'gross-tax': number;
  total: number;
  'suggested-price': number;
  date: string;
  time: string;
  'payment-method': string;
  'profit-percentage': number;
  'gross-profit': number;
  rating: number;
}

export interface ReqState {
  readonly data: SaleRecord[];
  readonly loading: boolean;
  readonly error: boolean;
}
