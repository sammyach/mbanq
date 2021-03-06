import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submitted;
  loading = false;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit(){
    this.loading = true;
    this.submitted = true;
    if(this.form.valid){
      const user = this.form.get('username').value;
      const password = this.form.get('password').value;

      if(user == 'a@a.com'){
        this.auth.loggedIn = true;
        this.router.navigate(['home'])
      }else{
        this.loading = false;
      }
    }else{
      this.loading = false;
      // this.submitted = false;
    }

    console.log('from login: auth->', this.auth.loggedIn);

  }

}
