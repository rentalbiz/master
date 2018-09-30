import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public model: any = {};
  constructor(private _registerService: RegisterService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.model.isfblogin = false;
    this.model.isgmaillogin = false;
    this.model.isadmin = false;
    this._registerService.registeruser(this.model).subscribe(res => {
      alert(res.message)
    })
  }
}
