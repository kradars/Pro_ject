import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Ledger } from 'app/model/ledger';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-ledgerlist',
  templateUrl: './ledgerlist.component.html',
  styleUrls: ['./ledgerlist.component.css']
})
export class LedgerlistComponent implements OnInit {

  constructor(private common:CommonService,private locations:Location) { }
   ledgerlist:Ledger[];
  ngOnInit(): void {
    this.common.getLedger().subscribe(list => this.ledgerlist=list)
  }
  getback()
  {
      this.locations.back();
  }

  deleteledgerlist(id:number){
    console.log("delete data sucessfully");
    alert(id);
    this.common.deleteLedger(id).subscribe();
    window.location.reload();
    
  }
}
