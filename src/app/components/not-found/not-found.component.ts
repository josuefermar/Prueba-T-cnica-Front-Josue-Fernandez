import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Utils from 'src/app/utils';

@Component({
  selector: 'app-not-found',
  template: '<h1>Not Found</h1>'
})
export class NotFoundComponent {
  constructor(
    private router: Router
  ){}

  ngOnInit(){
    Utils.showCantAccess()
    this.router.navigate(['']);
  }
}
