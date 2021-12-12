import {BaseModel} from "./base.model";

export interface Stock extends BaseModel{
  currency: string
  currentPrice: string
  priceChange: string
  stockExchange: string
}
