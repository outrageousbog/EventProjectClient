import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {EventDetailComponent} from './event/event-detail/event-detail.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'event',
    component: EventDetailComponent
  },
  {
    path: 'user',
    component: UserDetailComponent
  },
  {
    path: '**',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModules {
}

