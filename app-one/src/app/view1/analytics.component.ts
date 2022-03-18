import {
  Component,
  OnInit,
} from "@angular/core";

@Component({
  selector: "analytics-dashboard",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"],
  // encapsulation: ViewEncapsulation.None,  
})
export class AnalyticsDashboardComponent implements OnInit {
 
 

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
  console.log('in init')
      
 
  }
      
}


