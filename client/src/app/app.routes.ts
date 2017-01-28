import { Routes } from '@angular/router';

import { AddressComponent } from './address/address.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { CreditCardComponent } from './credit-card/credit-card.component';

export const ROUTES: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'creditcard', component: CreditCardComponent },
  { path: 'address', component: AddressComponent },
  { path: '**', redirectTo: '' }
]
