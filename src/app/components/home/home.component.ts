import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: User[] = [];

  constructor() { }

  receiveMessage($event: User[]) {
    this.users = $event
  }
}
