import { Directive } from '@angular/core';

import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { map } from 'rxjs/operators'
import { UsersService } from './users.service';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appAsyncValidator]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: AsyncValidatorDirective, multi: true }]
})
export class AsyncValidatorDirective implements AsyncValidator {

  constructor( private userService: UsersService ) { }
  
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
   
    return this.userService.getUsers(control.value).pipe( 
      map(user => {
        return user && user.length > 0 ? {'appAsyncValidator': true} : null ;
    }));
  }

}
