import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceSalePeopleService } from 'src/app/service/service-sale-people.service';

@Component({
  selector: 'app-new-sales-person',
  templateUrl: './new-sales-person.component.html'
})
export class NewSalesPersonComponent implements OnInit {

  
  spName;
  spSPID;

  error = {
    "error": { 
            "message": null,
    }
    };

    constructor(private sp: ServiceSalePeopleService, private router: Router) { }

  ngOnInit() {
  }

  saveButton(){
    var newSPObject = { "name": null,
                        "spid": null};
    
    newSPObject.name = this.spName;
    newSPObject.spid = this.spSPID;

    console.log(newSPObject);
    this.sp.addSalesPerson(newSPObject).subscribe(
      (pass)=>{console.log("All good")
              this.router.navigate(['salesPeople'])},
      (error)=>{this.error = error}

    )
  }

}
