import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-setdisbursement',
  templateUrl: './setdisbursement.component.html',
  styleUrls: ['./setdisbursement.component.css']
})
export class SetdisbursementComponent implements OnInit {
registerForm:FormGroup;
  constructor(private common:CommonService,private fb:FormBuilder,private location:Location) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      sanctionId:[],
      lonecaseno:[],
      offerletterAcceptedDate:[''],
      amountPayType:[''],
      totalAmount:[],
      bankName:[''],
      accoutNumber:[],
      ifsccode:[''],
      accountType:[''],
      transferAmount:[],
      paymentStatus:[''],
      amountPaidDate:[''],
      tenure:[]
    })
  }

  onSubmit()
  {
   window.location.reload();
    this.common.postDispursement(this.registerForm.value).subscribe();
  }

  goBack()
  {
    this.location.back();
  }
}
