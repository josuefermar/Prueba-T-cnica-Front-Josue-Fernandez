import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { GlobalVariable } from '../global';
import Swal from 'sweetalert2';
import { GitRepo } from '../interfaces/git-repo';

@Injectable({
  providedIn: 'root'
})
export class UserPromisesService {

  constructor(
    private http: HttpClient
  ) { }

  getUserInfo(userName: string): Promise<User> {
    const promise = new Promise<User>((resolve, reject) => {
      const apiURL = GlobalVariable.BASE_GIT_INFOUSER_API_URL + userName;
      this.http.get<User>(apiURL).subscribe({
        next: (res: User) => {
          resolve(res);
        }
      });
    });
    return promise;
  }

  getUserRepos(reposUrl: string): Promise<GitRepo[]> {
    const promise = new Promise<GitRepo[]>((resolve, reject) => {
      this.http.get<GitRepo[]>(reposUrl).subscribe({
        next: (res: GitRepo[]) => {
          resolve(res);
        }
      })
    })
    return promise;
  }

  getLanguagesrepo(repoUrl: string): Promise<Object> {
    const promise = new Promise<Object>((resolve, reject) => {
      this.http.get<Object>(repoUrl).subscribe({
        next: (res: Object) => {
          resolve(res);
        }
      })
    })
    return promise;
  }

}
