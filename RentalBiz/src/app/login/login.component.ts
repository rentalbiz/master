import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  loading = false;
  submitted = false;
  public model: any = {};
  loginmodel: { email: string, password: string };

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.loginService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log('fail');
      return;
    }

    this.loading = true;
    console.log(this.f);


    this.loginService.loginuser(this.f.email.value, this.f.password.value)
      // .pipe(first())
      .subscribe(
        data => {
          if (data.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(data.token[0]));
            this.router.navigate([this.returnUrl]);
          } else {
            this.loading = false;
            alert('Invalid User');
          }
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
        });
  }
}
