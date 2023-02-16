import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GitUser } from 'src/app/interfaces/git_user';
import { User } from 'src/app/interfaces/user';
import { UserObservablesService } from 'src/app/services/user-observables.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() users: User[] = [];
  @Output() messageEvent = new EventEmitter<User[]>();
  inputFocus = false;

  checkoutForm = this.formBuilder.group({
    userName: [null, [Validators.required, Validators.minLength(4), Validators.pattern('^((?!doublevpartners).)*$')]],
  });

  constructor(
    private userService: UserObservablesService,
    private formBuilder: FormBuilder,
  ){}

  onSubmit(): void{
    if(this.checkoutForm.valid){
      let userName = String(this.checkoutForm.value.userName)
      this.userService.searchUser(userName).subscribe((data: GitUser) => {
        if(data.items.length == 0){
          Swal.fire({
            text: "No se encontraron usuarios con el nombre suministrado.",
            icon: 'warning',
          })
          return;
        }
        this.users = data.items
        this.sendMessage()
      }, error => {
        Swal.fire({
          text: "Hubo un error al tratar de buscar, por favor intentalo mas tarde.",
          icon: 'error',
        })
      })
      this.checkoutForm.reset()
    }
  }

  sendMessage() {
    this.messageEvent.emit(this.users)
  }

  focusInputFunction(newValue: boolean){
    this.inputFocus = newValue;
  }
}
