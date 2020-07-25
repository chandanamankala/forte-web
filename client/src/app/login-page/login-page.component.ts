import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  // private authService: AuthService
  ) {
  }
  async ngOnInit() {
      this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  }
  async onSubmit() {
    console.log('in on submit');
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
        console.log("username",username);
        console.log("username",password);
       
        if(username == password){
          this.router.navigate(['./home']);
        }else  {
        this.loginInvalid = true;
        this.router.navigate(['./']);
      }
    } else {
      
    this.formSubmitAttempt = true;
    }
  }
}
