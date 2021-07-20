import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [  
  { path: 'create', loadChildren: () => import('./cats/create/create.module').then(m => m.CreateModule)},
  { path: 'create/:id', loadChildren: () => import('./cats/create/create.module').then(m => m.CreateModule)},
  { path: 'list', loadChildren: () => import('./cats/list/list.module').then(m => m.ListModule)},
  { path: '**',  redirectTo: 'list', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}