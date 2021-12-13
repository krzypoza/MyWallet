import { Component, OnInit } from '@angular/core';
import {Bond} from "../../../Model/bond.model";
import {BondService} from "../../service/bond.service";

@Component({
  selector: 'app-bond-table',
  templateUrl: './bond-table.component.html',
  styleUrls: ['./bond-table.component.scss']
})
export class BondTableComponent implements OnInit {

  value: Bond[] = [];

  constructor(private bondService: BondService) {
  }

  ngOnInit(): void {
    this.value = this.bondService.getAllBonds();
    console.log(this.value);
  }
}
