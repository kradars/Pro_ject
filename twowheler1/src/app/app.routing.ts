import { MastermoduleModule } from './module/mastermodule/mastermodule.module';
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { EmployeeModule } from './module/employee/employee.module';
import { HomeComponent } from './home/home.component';
import { OperationexecutiveModule } from './module/operationexecutive/operationexecutive.module';
import { CreditmanagerModule } from './module/creditmanager/creditmanager.module';
import { RelationexecutiveModule } from './module/relationexecutive/relationexecutive.module';
import { AbcModule } from './module/abc/abc.module';
import { EmplistModule } from './module/emplist/emplist.module';
import { ProductModule } from './module/product/product.module';
import { AccountheadModule } from './module/accounthead/accounthead.module';
import { TelecallerModule } from './module/telecaller/telecaller.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';


export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path:"log",component:LoginComponent
  },
  {
    path:"about",component:AboutusComponent
  },
  {
    path:"contact",component:ContactusComponent
  },
  {
    path: 'role',
    component: AdminLayoutComponent,
    children: [
      {path: 'admin', loadChildren: () => MastermoduleModule},
      {path: 'emp', loadChildren: () => EmployeeModule},
      {path:'operation',loadChildren:()=>OperationexecutiveModule},
      {path:'cr',loadChildren:()=>CreditmanagerModule},
      {path:'relation',loadChildren:()=>RelationexecutiveModule},
      {path:'ab',loadChildren:()=>AbcModule},
      {path:'empe',loadChildren:()=>EmplistModule},
      {path:'pro',loadChildren:()=>ProductModule},
      {path:'acthead',loadChildren:()=>AccountheadModule},
      {path:'telcal',loadChildren:()=>TelecallerModule}
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];



