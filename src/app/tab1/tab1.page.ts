import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MoodInputMenuComponent } from '../mood-input-menu/mood-input-menu.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule,MoodInputMenuComponent],
})
export class Tab1Page {
  constructor() {}
}
