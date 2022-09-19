import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import {RedirectEvenGuard} from "./redirect-even.guard";
import {ResolveFifthElemDataService} from "./resolve-fifth-elem-data.service";

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    canActivate: [RedirectEvenGuard]
  },
  {
    path: 'second',
    component: SecondComponent,
    canActivate: [RedirectEvenGuard]
  },
  {
    path: 'third',
    component: ThirdComponent,
    canActivate: [RedirectEvenGuard]
  },
  {
    path: 'fourth',
    component: FourthComponent,
    canActivate: [RedirectEvenGuard]
  },
  {
    path: 'fifth',
    component: FifthComponent,
    canActivate: [RedirectEvenGuard],
    resolve: {
      people: ResolveFifthElemDataService,
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
