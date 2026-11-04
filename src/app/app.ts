import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './pages/student/student';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Student],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Ganesh');
}
