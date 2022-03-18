import { NgModule } from "@angular/core";


import { AnalyticsDashboardComponent } from "./analytics.component";

import { AnalyticsRoutingModule } from "./analytics-routing.module";




@NgModule({
  declarations: [AnalyticsDashboardComponent],
  imports: [    
    AnalyticsRoutingModule,
   
  ],
  providers: [],
})
export class AnalyticsDashboardModule {}
