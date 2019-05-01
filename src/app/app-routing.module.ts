import { CustomerInfomationComponent } from './customer/booking-ticket/customer-infomation/customer-infomation.component';
import { ChooseSeatComponent } from './customer/booking-ticket/choose-seat/choose-seat.component';
import { AdminComponent } from './admin/admin/admin.component';
import { SellerComponent } from './seller/seller/seller.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer/customer.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { BookingTicketComponent } from './customer/booking-ticket/booking-ticket.component';
import { PaymentComponent } from './customer/booking-ticket/payment/payment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: CustomerComponent,
  },
  {
    path: 'booking-ticket',
    component: BookingTicketComponent,
    children: [
      {
        path: '',
        component: ChooseSeatComponent
      },
      {
        path: 'customer-info',
        component: CustomerInfomationComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      }
    ]
  },
  {
    path: 'seller',
    component: SellerComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
