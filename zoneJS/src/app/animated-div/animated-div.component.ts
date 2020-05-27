import { Component, OnInit, ViewChild, ElementRef, NgZone, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-animated-div',
  templateUrl: './animated-div.component.html',
  styleUrls: ['./animated-div.component.scss']
})
export class AnimatedDivComponent implements OnInit {

  @ViewChild('div', { static: true }) div: ElementRef

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {

    this.changeColor();
  }

  private setRandomColor() {
    return ['red', 'orange', 'yellow', 'green', 'blue', 'purple'][Math.random() * 6 | 0];
  }
  private changeColor() {
    setInterval(_ => this.div.nativeElement.style.background = this.setRandomColor(), 50)
  }




}
