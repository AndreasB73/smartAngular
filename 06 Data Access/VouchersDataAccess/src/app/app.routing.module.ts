import { NoSQLInterceptorComponent } from './demos/no-sqlinterceptor/no-sqlinterceptor.component';
import { ObservablesComponent } from './demos/observables/observables.component';
import { HttpClientsComponent } from './demos/http-clients/http-clients.component';
import { PromiseComponent } from './demos/promise/promise.component';
import { DemosComponent } from './demos/demos.component';
import { VouchersComponent } from './vouchers/vouchers.component';
import { VoucherComponent } from './vouchers/voucher/voucher.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, ViewChild } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { RouteGuard } from './route.guard.service';

const appRoutes: Routes = [
    { path: '',
      component: DemosComponent,
      children: [
        { path: 'promise', component: PromiseComponent },
        { path: 'clients', component: HttpClientsComponent },
        { path: 'observables', component: ObservablesComponent },
        { path: 'nosql', component: NoSQLInterceptorComponent }
      ]
    },
    { path: 'vouchers',
      component: VouchersComponent
    },
    { path: 'vouchers/:id',
      component: VoucherComponent
    },
    { path: 'accounts',
      component: AccountsComponent,
      data: { title: 'Accounts' }
    },
    {
      path: 'admin',
      component: AdminComponent ,
      data: { title: 'The protected Admin Page' },
      canActivate: [RouteGuard]
    },    
  ];

@NgModule({
 imports: [RouterModule.forRoot(appRoutes, { enableTracing: false})],
 exports: [RouterModule]
})
export class AppRoutingModule {

}