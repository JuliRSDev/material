import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loadingLogin = false;

  /* FormBuilder = realiza un seguimiento del valor y estado de cambio y validez de los datos. */
  constructor( private formBuilder: FormBuilder, 
               private matSnackBar: MatSnackBar,
               private router: Router ) { 
    this.form = this.formBuilder.group({
      usuario: [ '', Validators.required ],
      password: [ '', Validators.required ]
    })
  }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    console.log( usuario );
    console.log( password );

    if ( usuario == 'julian' && password == '123' ) {
      /* Lo redirecionamso  */
      this.fakeLoading();
    } else { 
      /* Mensaje de error */
      this.ModalError();
      this.form.reset();
    }

  }

  ModalError() {
    this.matSnackBar.open( 'Usuario o contraseña ingresado son invalidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    } )
  }

  fakeLoading(){
    this.loadingLogin = true;
    setTimeout( () => {
      /* Redireccionamos al dashboard */
      this.router.navigateByUrl( '/dashboard' );
    }, 1000 )

  }

}
