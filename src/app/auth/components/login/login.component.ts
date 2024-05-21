import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(fb: FormBuilder, private authService: AuthService){
    this.loginForm = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [Validators.required])
    });
  }

  funIngresar(){
    this.authService.login(this.loginForm.value).subscribe(
      (res: any) => {
        console.log("LOGIN ******: ", res)
        localStorage.setItem("access_token", res.access_token)
      },
      (error) => {
        console.log(error.error)
      }
    )
  }


}
