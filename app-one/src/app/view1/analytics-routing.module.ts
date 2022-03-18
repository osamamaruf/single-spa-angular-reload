import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsDashboardComponent } from './analytics.component';

const routes: Routes = [
    {
      path: "**",
      component: AnalyticsDashboardComponent,    
    },
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AnalyticsRoutingModule {}
