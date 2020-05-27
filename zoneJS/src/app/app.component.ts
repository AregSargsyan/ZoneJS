import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor( private cd: ChangeDetectorRef){}

  count=0;



  funk1() {
    console.log("ng-click work")
  }

  ngOnInit(): void {
    // setInterval(_=> this.count++,500)
  }


  runChangeDetection() {
    console.log('Checking the view');
  }
}
