import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  logIn() {
    const user = this.form.value.user;
    const password = this.form.value.password;

    if(user === 'patito' && password === 'de ule') {
      // Redireccionamos al dashboard
      this.fakeLoading()
    } else {
      // Mostramos mensaje de error
      this.sendErrorSnack()
      this.form.reset()
    }
  }

  sendErrorSnack() {
    this._snackBar.open('Invalid user or password', '', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard/people'])
    }, 1500)
  }

}
