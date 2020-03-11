import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {UsersServiceService} from '../services/users-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private service: UsersServiceService,
  ) {
     // redirect to home if already logged in
     if (this.authenticationService.currentUserValue) {
       this.router.navigate(['/']);
     }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      alert('Username ou password incorrect !');
      return;
    }


    this.loading = true;
    /*this.authenticationService.login(this.f.username.value, this.f.password.value).subscribe(() => {
      alert('connected');
*/

    this.service.selectLoginUtilisateur(this.f.username.value, this.f.password.value).subscribe(
      res => {
        // tslint:disable-next-line:triple-equals
        if (res == '') {
          this.loading = false;
          alert('username or password inncorrect !');
          return; }
        console.log(res);
        this.authenticationService.loginUser(res);
        this.loading = false;
        window.location.replace('/accueil');
      }
    );
  }

}

