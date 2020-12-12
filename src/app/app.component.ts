import { Component } from '@angular/core';
import { data } from '../assets/data.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blinking-words';
  text = data.text;
}
