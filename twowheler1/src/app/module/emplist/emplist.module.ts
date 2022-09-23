import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { RouterModule, Routes } from '@angular/router';


const emprouting: Routes = [
  {path: 'elit', component: EmplistComponent},
  {path: 'edet', component: EmpdetailsComponent}
];

@NgModule({
  declarations: [EmplistComponent, EmpdetailsComponent],
  imports: [
    CommonModule,RouterModule.forChild(emprouting)
  ]
})
export class EmplistModule { }
