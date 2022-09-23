import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoanDisbursement } from 'app/model/loan-disbursement';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-emipayment',
  templateUrl: './emipayment.component.html',
  styleUrls: ['./emipayment.component.css']
})
export class EmipaymentComponent implements OnInit {

  constructor(private routes:ActivatedRoute, private common: CommonService,private locations: Location,private fb:FormBuilder) { }
  
  disbursementObj : LoanDisbursement[];
  regDefForm:FormGroup;
  ngOnInit(): void {
    this.regDefForm=this.fb.group({
      sanctionId:[],
	    AmountPaidDate:[''],
	    tenure:[],
	    transferAmount:[],
	    totalAmount:[],
    })

    //  first way is snapshot
  //  let emId=  this.routes.snapshot.paramMap.get('id');
  // let empId=parseInt(emId);
 
  // this.common.getDispursementId(empId).subscribe(data=>{
  //   console.log("Show Employee "+data);
  //   this.disbursementObj=data;
  // }) 
  
//  Second way is Observable

  this.routes.paramMap.subscribe(param1=>{
      let emId= param1.get('id');
      // alert(emId)
    let empId=parseInt(emId);
    // alert(empId);
    this.common.getDispursementId(empId).subscribe(data=>{
      this.disbursementObj=data;
      // alert(this.disbursementObj.accountType);
    })
  })
  
}
 count:number=0;
defaultCheck()
{
  this.count=this.count +1;
  alert(this.count);
  if(this.count==3)
  {
    this.count=0;
    this.common.postDefault(this.regDefForm.value).subscribe();
    // this.common.postDefault(id).subscribe();
  }
}

  getback() {
    this.locations.back();
  }
}

