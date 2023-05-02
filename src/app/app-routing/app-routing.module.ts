import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { SecondComponent } from "../second/second.component";
import { FirstComponent } from "../first/first.component";

const appRoutes:Routes = [
  { path: "first", component: FirstComponent },
  { path: "second", component: SecondComponent }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
