import { BaseModel } from "./base.model";

export interface Bond extends BaseModel{
  margins: number[]
  expirationDate: Date
}
