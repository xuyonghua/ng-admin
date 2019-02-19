import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpService} from '../service/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  constructor(private httpService: HttpService) {

  }

  submitForm(): void {
    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.controls.userName.value && this.validateForm.controls.password.value) {
      // this.httpService.login(this.validateForm.controls.userName.value, this.validateForm.controls.password.value).then(res => {
      //   console.log(res);
      // }, err => {
      //   console.log(err);
      // });
      console.log(this.validateForm.controls.remember.value);
      this.router.navigateByUrl('main');
    }
  }

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
