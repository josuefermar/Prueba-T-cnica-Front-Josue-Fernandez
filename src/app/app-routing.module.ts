import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PermissionsGuard } from './guards/permissions.guard';

const routes: Routes = [
  { path: 'user/:user', component: UserCardComponent, canActivate: [PermissionsGuard] },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }