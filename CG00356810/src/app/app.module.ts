import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesPersonComponent } from './component/sales-person/sales-person.component';
import { Routes } from '@angular/router';

import {HttpClientModule  } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { NewSalesPersonComponent } from './component/new-sales-person/new-sales-person.component';
import { UpdateSalesPersonComponent } from './component/update-sales-person/update-sales-person.component';
import { DeleteSalesPersonComponent } from './component/delete-sales-person/delete-sales-person.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  
    UpdateSalesPersonComponent,
    DeleteSalesPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

