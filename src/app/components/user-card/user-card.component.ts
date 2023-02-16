import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitRepo } from 'src/app/interfaces/git-repo';
import { User } from 'src/app/interfaces/user';
import { UserObservablesService } from 'src/app/services/user-observables.service';
import { UserPromisesService } from 'src/app/services/user-promises.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  user: User = {
    login: '',
    id: 0,
    avatar_url: '',
    url: '',
    followers_url: '',
    repos_url: '',
    languages: [],
    score: 0
  }

  repos: GitRepo[] = []

  constructor(
    private route: ActivatedRoute,
    private userPromisesService: UserPromisesService,
    private userObservablesService: UserObservablesService,
  ){}

  ngOnInit(){
    let userName = String(this.route.snapshot.paramMap.get('user'))

    this.userObservablesService.getUserInfo(userName).subscribe((data: User) => {
      this.user = data
      this.getUserRepos()
    })
  }

  getUserRepos(){
    this.userPromisesService.getUserRepos(this.user.repos_url).then((data: GitRepo[]) => {
      this.user.repos = data
      this.repos = data.slice(0, 4)
      this.getLanguages()
    })
  }

  getLanguages(){
    this.user.repos?.forEach(repo => {
        this.userPromisesService.getLanguagesrepo(repo.languages_url).then((data: Object) => {
          console.log(data);
          if(this.user.languages != undefined && this.user.languages != null){
            this.user.languages = [...this.user.languages, ...(Object.keys(data))]
            this.user.languages = this.user.languages.filter((value, index, array) => array.indexOf(value) === index)
          }else{
            this.user.languages = Object.keys(data);
          }
        })
    })
  }  
}
