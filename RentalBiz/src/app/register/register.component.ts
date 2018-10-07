import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public model: any = {};
  constructor(private _registerService: RegisterService, private _router: Router, private toastr: ToastrService) {
  }
  ngOnInit() {
  }
  onSubmit() {
    this.model.isfblogin = false;
    this.model.isgmaillogin = false;
    this.model.isadmin = false;
    this._registerService.checkemailexist(this.model.email).subscribe(res => {
      if (!res) {
        this._registerService.registeruser(this.model).subscribe(ressuccess => {
          this._router.navigate(['/registrationsuccess']);
        })
      }
      else {
        this.toastr.error("email already exists !");
      }
    });

  }
}
