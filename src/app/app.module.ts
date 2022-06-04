import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import {TabViewModule} from 'primeng/tabview';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './_shared/ui/header/header.component';
import { FooterComponent } from './_shared/ui/footer/footer.component';
import { RecoverAccountComponent } from './account/recover-account/recover-account.component';
import { SidebarComponent } from './_shared/ui/sidebar/sidebar.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ListCustomersComponent } from './manage-customers/list-customers/list-customers.component';
import { ManageOrganizationComponent } from './manage-organization/manage-organization.component';
import { CustomerDetailsComponent } from './manage-customers/customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RecoverAccountComponent,
    SidebarComponent,
    ManageCustomersComponent,
    ListCustomersComponent,
    ManageOrganizationComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    PasswordModule,
    InputTextModule,
    ProgressSpinnerModule,
    ButtonModule,
    TableModule,
    AccordionModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
