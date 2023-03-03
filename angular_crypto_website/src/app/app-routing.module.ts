import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './components/balance/balance.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MarketsComponent } from './components/markets/markets.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OpenOrdersComponent } from './components/open-orders/open-orders.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: '/', pathMatch: 'full',
  },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'marketler', component: MarketsComponent},
  {path: 'market/:marketCode', component:DetailComponent},

  {
    path: 'profil',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'bakiye', component: BalanceComponent, canActivate: [AuthGuard], },
      { path: 'acik-emirler', component: OpenOrdersComponent , canActivate: [AuthGuard],},
    ],},

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
