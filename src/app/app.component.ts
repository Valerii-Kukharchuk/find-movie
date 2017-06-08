import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})
export class AppComponent {
  title: string = 'MovieInfo';

  links = [
    { path: '/dashboard', icon: 'home', label: 'Главная'},
    { path: '/filmList', icon: 'style', label: 'Все фильмы'},
    { path: '/profile', icon: 'settings', label: 'Профиль'}
  ];
}

