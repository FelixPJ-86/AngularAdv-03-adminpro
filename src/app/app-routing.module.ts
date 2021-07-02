import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRountingModule } from './auth/auth.routing';

const routes:Routes=[
  {path:'' , redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**',component:NopagefoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRountingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
