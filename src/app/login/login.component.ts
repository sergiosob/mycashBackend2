import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.router.navigate(['/cadastrar-usuario']);
  }

  login(){
    if (this.loginForm.valid){
     localStorage.setItem('token', 'paodeloquedancatangonasibeira');
     this.router.navigate(['/dashboard']);
    }else{
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Preencha corretamente todos os campos'
      });
    }
  }

}
