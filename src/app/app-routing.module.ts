import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import {GuardGuard} from "./guard.guard";
import {FifthResolverService} from "./fifth/fifth-resolver.service";

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'second',
    component: SecondComponent,
    canActivate: [GuardGuard]

  },
  {
    path: 'third',
    component: ThirdComponent,
    canActivate: [GuardGuard]

  },
  {
    path: 'fourth',
    component: FourthComponent,
    canActivate: [GuardGuard]

  },
  {
    path: 'fifth',
    component: FifthComponent,
    canActivate: [GuardGuard],
    resolve: {
      people: FifthResolverService
    }
  },
  {
    path: '**',
    redirectTo: '/first'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
