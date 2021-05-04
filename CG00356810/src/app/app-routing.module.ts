import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewSalesPersonComponent } from './component/new-sales-person/new-sales-person.component';
import { SalesPersonComponent } from './component/sales-person/sales-person.component';



const routes: Routes = [
  {path: "salesPeople", component: SalesPersonComponent},
  // {path: "updateSalesPeople", component: UpdateSalesPeopleComponent},
  // {path: "deleteSalesPerson", component: DeleteSalesPersonComponent},
   {path: "newSalesPerson", component: NewSalesPersonComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SalesPersonComponent, NewSalesPersonComponent]