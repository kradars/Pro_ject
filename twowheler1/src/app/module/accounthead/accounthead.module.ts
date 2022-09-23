import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoandisbursementComponent } from './loandisbursement/loandisbursement.component';
import { RouterModule, Routes } from '@angular/router';
import { SetdisbursementComponent } from './setdisbursement/setdisbursement.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LedgerComponent } from './ledger/ledger.component';
import { LedgerlistComponent } from './ledgerlist/ledgerlist.component';
import { EmipaymentComponent } from './emipayment/emipayment.component';
// import { EmipaymentComponent } from './emipayment/emipayment.component';

const emprouting: Routes = [
  {path: 'dasb', component: DashboardComponent},
  {path: 'setDisbur', component: SetdisbursementComponent},
  {path: 'listDisbur', component: LoandisbursementComponent,
children:[
  {
    path:'emipay/:id',component:EmipaymentComponent
  }
]},
  {path: 'setledger', component: LedgerComponent},
  {path: 'listledger', component: LedgerlistComponent},
];

@NgModule({
  declarations: [LoandisbursementComponent, SetdisbursementComponent, DashboardComponent, LedgerComponent, LedgerlistComponent, EmipaymentComponent],
  imports: [
    CommonModule,RouterModule.forChild(emprouting),ReactiveFormsModule
  ]
})
export class AccountheadModule { }
