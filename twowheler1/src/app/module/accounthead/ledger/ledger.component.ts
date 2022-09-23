import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  

  registerForm:FormGroup;

  constructor(private _fb:FormBuilder, private commonService:CommonService, private location:Location) { }

  ngOnInit(): void {
    this.registerForm=this._fb.group(
      {
        ledgerId:[''],
    ledgerCreatedDate:[''],
    totalLoanAmount:[''],
    payableAmountwithInterest:[''],
    tenure:[''],
    monthlyEMI:[''],
    amountPaidtillDate:[''],
    remainingAmount:[''],
    nextEMIDateStart:[''],
    nextEMIDateEnd:[''],
    defaulterCount:[''],
    paymentStatus:[''],
    previousEMIStatus:[''],
    currentmonthEMIStatus:[''],
    loanEndDate:[''],
    loanStatus:['']
      }
    )
  }
  onSubmit()
  {
    if(this.registerForm.valid){

      console.log("Successfully send ledger letter");
       this.commonService.saveledger(this.registerForm.value).subscribe();
       window.location.reload();
       
    }
  }

  goBack(){
      this.location.back();
  }
  

}