import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { ViewThreeComponent } from './view3/second.component';
import { ViewFourComponent } from './view4/second.component';



const appRoutes: Routes = [  
  {
    path: "view1",
    loadChildren: () => import("./view1/analytics.module").then(m => m.AnalyticsDashboardModule),
  },
  {
    path: "view2",
    loadChildren: () => import("./view2/analytics.module").then(m => m.View2Module),
  },
  { path: 'view3', component: ViewThreeComponent },
  { path: 'view4', component: ViewFourComponent },
  { path: '**', component: EmptyRouteComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
