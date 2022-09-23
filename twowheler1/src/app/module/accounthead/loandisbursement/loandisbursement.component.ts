import { Component, OnInit } from '@angular/core';

import { LoanDisbursement } from 'app/model/loan-disbursement';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-loandisbursement',
  templateUrl: './loandisbursement.component.html',
  styleUrls: ['./loandisbursement.component.css']
})
export class LoandisbursementComponent implements OnInit {
listDis:LoanDisbursement[];
  constructor(private common:CommonService) { }

  ngOnInit(): void {
    this.common.getDispursement().subscribe(data=>{
      this.listDis=data;
    })
  }
  
  deleteData(sanctionId:number)
  {
    
    console.log("deleted");
    alert(sanctionId);
    this.common.deleteDispursement(sanctionId).subscribe();
    window.location.reload();
  }

}
