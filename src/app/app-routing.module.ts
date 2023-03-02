// <!-- /*
// * File: app-routing.module.ts
// * Author: Kovács Dorina
// * Copyright: 2023,  Kovács Dorina
// * Group: Szoft II/N
// * Date: 2023-03-02
// * Github: https://github.com/Kdorina/
// * Licenc: GNU GPL
// */ -->


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'students', component: StudentsComponent},
  {path:'home', component: AboutComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
