//import { moveIn, fallIn } from 'router.animations';
import { Component } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  host: {'[@moveIn]': ''}
})
export class SignupComponent {

  state: string = '';
  error: any;

  constructor(public af: AngularFireAuth,private router: Router) {

  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUserWithEmailAndPassword(
        formData.value.email,
        formData.value.password).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/login'])
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

}
