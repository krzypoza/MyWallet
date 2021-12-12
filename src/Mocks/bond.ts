import {Bond} from "../Model/bond.model";

export class bondsMock {
  static bonds: Bond[] = [
    {
      _type: 'Bond',
      ticker: 'EDO0629',
      name: 'EDO0629',
      startDate: new Date(2019, 5, 21),
      endDate: undefined,
      currentValue: 110.71,
      quantity: 27,
      buyPrice: 100,
      sellPrice: undefined,
      margins: [0.027, 0.049, 0.058],
      expirationDate: new Date(2029, 5, 21),
      transId: 1
    },
    {
      _type: 'Bond',
      ticker: 'EDO0629',
      name: 'EDO0629',
      startDate: new Date(2019, 5, 27),
      endDate: undefined,
      currentValue: 110.61,
      quantity: 81,
      buyPrice: 100,
      sellPrice: undefined,
      margins: [0.027, 0.049, 0.058],
      expirationDate: new Date(2029, 5, 27),
      transId: 2
    },
    {
      _type: 'Bond',
      ticker: 'ROD0132',
      name: 'ROD0132',
      startDate: new Date(2020, 0, 7),
      endDate: undefined,
      currentValue: 107.99,
      quantity: 35,
      buyPrice: 100,
      sellPrice: undefined,
      margins: [0.032, 0.05],
      expirationDate: new Date(2032, 0, 7),
      transId: 3
    }
  ]
}
