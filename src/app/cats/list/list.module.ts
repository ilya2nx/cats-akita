import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TableComponent } from "./table/table.component";
import { TileComponent } from "./tile/tile.component";
import { ListComponent } from "./list.component";

@NgModule({
  declarations: [
    TableComponent,
    TileComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'', component: ListComponent, children: [
        { path:'tile', component: TileComponent},
        { path:'table', component: TableComponent},
        { path: '**',  redirectTo: 'tile', pathMatch: 'full' }
      ]},
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class ListModule {

}
