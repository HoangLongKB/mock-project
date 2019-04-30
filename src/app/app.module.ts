import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { AdminComponent } from './admin/admin/admin.component';
import { SellerComponent } from './seller/seller/seller.component';
import { LoginComponent } from './authentication/login/login.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginDialogComponent } from './shared/dialogs/login/login-dialog.component';
import { MyAngularMaterialModule } from './shared/my-angular-material/my-angular-material.module';
import { SocialDialogContentComponent } from './shared/dialogs/social-dialog-content/social-dialog-content.component';
import { SignupComponent } from './shared/dialogs/signup/signup.component';
import { BookingTicketComponent } from './customer/booking-ticket/booking-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AdminComponent,
    SellerComponent,
    LoginComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    LoginDialogComponent,
    SocialDialogContentComponent,
    SignupComponent,
    BookingTicketComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyAngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginDialogComponent,
    SignupComponent
  ]
})
export class AppModule { }
