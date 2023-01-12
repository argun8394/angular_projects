import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './components/balance/balance.component';
import { LoginComponent } from './components/login/login.component';
import { MarketsComponent } from './components/markets/markets.component';
import { OpenOrdersComponent } from './components/open-orders/open-orders.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'marketler',
    component : MarketsComponent
  },
  {
    path : 'profil',
    component : ProfileComponent,
    canActivate : [AuthGuard],
    children : [
      {
        path: 'bakiye',
      component: BalanceComponent
    },
    {
      path : 'acik-emirler',
      component:OpenOrdersComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
