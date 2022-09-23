import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaulterlistComponent } from './defaulterlist/defaulterlist.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const emprouting: Routes = [
  {path: 'defList', component: DefaulterlistComponent}
];

@NgModule({
  declarations: [DefaulterlistComponent],
  imports: [
    CommonModule,RouterModule.forChild(emprouting),ReactiveFormsModule
  ]
})
export class TelecallerModule { }
