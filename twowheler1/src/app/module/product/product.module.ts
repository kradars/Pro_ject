import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductaddComponent } from './productadd/productadd.component';
import { RouterModule, Routes } from '@angular/router';

const emprouting: Routes = [
  {path: 'proadd', component: ProductaddComponent}
];

@NgModule({
  declarations: [ProductaddComponent],
  imports: [
    CommonModule,RouterModule.forChild(emprouting)
  ]
})
export class ProductModule { }
