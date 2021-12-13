import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BondTableComponent } from './bond-table.component';
import {CardModule} from "primeng/card";
import {PanelModule} from "primeng/panel";
import {TableModule} from "primeng/table";



@NgModule({
    declarations: [
        BondTableComponent
    ],
    exports: [
        BondTableComponent
    ],
  imports: [
    CommonModule,
    CardModule,
    PanelModule,
    TableModule
  ]
})
export class BondTableModule { }
