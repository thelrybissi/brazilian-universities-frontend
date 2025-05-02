import { Component } from '@angular/core';
import { UniversitiesComponent } from './pages/universities/universities.component';

@Component({
  selector: 'app-root',
  imports: [UniversitiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'brazilian-universities-frontend';
}
