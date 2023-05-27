import { Component, OnInit } from '@angular/core';
import { IonRange, RangeChangeEventDetail, RangeKnobMoveStartEventDetail, RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-mood-input-menu',
  templateUrl: './mood-input-menu.component.html',
  styleUrls: ['./mood-input-menu.component.scss'],
})
export class MoodInputMenuComponent implements OnInit {
  rangeChange($event: RangeCustomEvent) {
    var value;
    try {
      value = $event.target.value;
    } catch(error) {
      console.warn('range change event problem...');
      throw error;
    }
    console.log(`mood range updated: ${value}`);
  }

  constructor() {}

  ngOnInit() {}
}
