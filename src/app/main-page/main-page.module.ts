import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { CardModule } from "primeng/card";
import { PanelModule } from "primeng/panel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableModule} from "primeng/table";
import {BrowserModule} from "@angular/platform-browser";
import {BondTableModule} from "./bond-table/bond-table.module";

@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CardModule,
    BrowserAnimationsModule,
    PanelModule,
    TableModule,
    BondTableModule
  ]
})
export class MainPageModule { }
