import {
  Component,
  OnInit,
} from "@angular/core";

@Component({
  selector: "view2",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"],
  // encapsulation: ViewEncapsulation.None,  
})
export class View2Component implements OnInit {
 
 

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


