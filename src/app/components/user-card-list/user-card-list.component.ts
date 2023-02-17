import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-card-list',
  templateUrl: './user-card-list.component.html',
  styleUrls: ['./user-card-list.component.css']
})
export class UserCardListComponent {
  @Input() user: User = {
    login: '',
    id: 0,
    avatar_url: '',
    url: '',
    followers_url: '',
    repos_url: '',
    score: 0,
    languages: [],
    followers: 0
  };

  constructor(
    private router: Router
  ) { }

  goToUser(user: string): void {
    // localStorage.setItem('user_score', String(this.user.score));
    this.router.navigate([`/user/${user}`])
  }
}
