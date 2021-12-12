import { Component, OnInit } from '@angular/core';
import { BondService } from "../service/bond.service";
import {Bond} from "../../Model/bond.model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  value: Bond[] = [];

  constructor( private bondService: BondService) { }

  ngOnInit(): void {
    this.value = this.bondService.getAllBonds();
    console.log(this.value);
  }

}
