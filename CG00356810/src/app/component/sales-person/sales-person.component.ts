import { Component, OnInit } from '@angular/core';
import { ServiceSalePeopleService } from 'src/app/service/service-sale-people.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-sales-person',
  templateUrl: './sales-person.component.html'
})
export class SalesPersonComponent implements OnInit {

  salespeople;
  error;
  constructor(private sp: ServiceSalePeopleService) { }

  ngOnInit(): void {
    this.sp.getSalesPeople().subscribe(
      (data)=> {console.log(this.salespeople = data)},
      (error) =>{console.log(this.error = error)}
    )
  }


  updateButton(spid: String){
    //this.dt.setSpid(spid);
    
    console.log(spid);
   // this.router.navigate(['updateSalesPeople'])
    
  }

  deleteButton(spid: String){
    //this.dt.setSpid(spid);
    
   // this.router.navigate(['deleteSalesPerson'])
  }

}
