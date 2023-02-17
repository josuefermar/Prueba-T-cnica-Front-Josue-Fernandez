import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../global';
import { GitUser } from '../interfaces/git_user';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserObservablesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  searchUser(userName: string): Observable<GitUser> {
    return this.httpClient.get<GitUser>(GlobalVariable.BASE_GIT_API_URL, {
      params: {
        q: userName
      },
      headers: GlobalVariable.HTTP_GIT_API_HEADERS
    })
  }

  getUserInfo(userName: string): Observable<User> {
    return this.httpClient.get<User>(GlobalVariable.BASE_GIT_INFOUSER_API_URL + userName, {
      headers: GlobalVariable.HTTP_GIT_API_HEADERS
    });
  }
}
