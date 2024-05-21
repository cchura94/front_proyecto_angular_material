import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(fb: FormBuilder, private authService: AuthService, private router: Router){
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

        this.router.navigate(["/admin/categoria"])

      },
      (error) => {
        console.log(error.error)
        Swal.fire({
          title: 'Error!',
          text: error.error?.message,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      }
    )
  }


}
