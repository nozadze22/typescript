import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent, HompageComponent, LocationComponent, MenuComponent, NotfoundComponent, OrderComponent, ReservationComponent } from './shared';

const routes: Routes = [
{
  path: '',
  component: HompageComponent,
},
{
path: "menu",
component:MenuComponent,
},
{
path: "reservation",
component:ReservationComponent,
},

{
path: "location",
component: LocationComponent,
},
{
path: "order",
component: OrderComponent,
},

{
path: "auth",
component: AuthComponent,
},


{
path: "404",
component: NotfoundComponent,
},
{
path: '**',
pathMatch: "full",
redirectTo: '404',
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
