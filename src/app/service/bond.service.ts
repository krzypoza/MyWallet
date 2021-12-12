import { Injectable } from '@angular/core';
import {bondsMock} from "../../Mocks/bond";

@Injectable({
  providedIn: 'root'
})
export class BondService {

  constructor() { }

  getAllBonds(){
    return bondsMock.bonds;
  }
}
