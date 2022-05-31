import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RecoverAccountComponent } from './account/recover-account/recover-account.component';
import { HomeComponent } from './home/home.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManageOrganizationComponent } from './manage-organization/manage-organization.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recover-account', component: RecoverAccountComponent},
  {path: 'customers', component: ManageCustomersComponent},
  {path: 'organization', component: ManageOrganizationComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
