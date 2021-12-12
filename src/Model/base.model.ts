export interface BaseModel {
  _type: string
  transId: number
  ticker: string
  name: string
  startDate: Date
  endDate?: Date
  quantity: number
  buyPrice: number
  sellPrice?: number
  currentValue: number
}
