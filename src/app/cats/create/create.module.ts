import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CreateComponent } from "./create.component";

@NgModule({
 declarations: [
  CreateComponent
 ],
 imports: [
   CommonModule,
   FormsModule,
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
