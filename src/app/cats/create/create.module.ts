import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CreateComponent } from "./create.component";

@NgModule({
 declarations: [
  CreateComponent
 ],
 imports: [
   CommonModule,
   FormsModule,
   ReactiveFormsModule,
   RouterModule.forChild([
    {path: '', component: CreateComponent}
   ])
 ],
 exports: [
   RouterModule
 ]
})

export class CreateModule {

}
