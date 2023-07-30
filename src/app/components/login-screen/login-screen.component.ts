import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, catchError } from 'rxjs';
import { OtpService } from 'src/app/service/otp.service';


@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
})
export class LoginScreenComponent implements OnInit {
  otpGenerationForm: FormGroup = new FormGroup({});

  otpVerificationForm: FormGroup = new FormGroup({});
  private otpSubscription: Subscription | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private otpService: OtpService,
    private router: Router,

  ) {}

  ngOnInit() {
    this.initOtpGenerationForm();
    this.initOtpVerificationForm();
  }

  initOtpGenerationForm() {
    this.otpGenerationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  initOtpVerificationForm() {
    this.otpVerificationForm = this.formBuilder.group({
      otp: ['', Validators.required],
    });
  }

  async generateLogInOtp() {
    if (this.otpGenerationForm.valid) {
      const email = this.otpGenerationForm.get('email')!.value;
      console.log('hello');
      try {
        console.log('hello1');
        this.otpSubscription = this.otpService
          .generateOtp(email)
          .pipe(
            catchError((error: any) => {
              console.log('hello3');
              console.error('Error generating OTP:', error);
              return [];
            })
          )
          .subscribe((otp: string) => {
            console.log(otp); 
          });
      } catch (error) {
        console.log('hello4');
        console.error('Error generating OTP:', error);
      }
    }
  }
  async verifyLoginOtp() {
  if (this.otpVerificationForm.valid) {
    const email = this.otpGenerationForm.get('email')!.value;
    const otp = this.otpVerificationForm.get('otp')!.value;
    const username = this.otpGenerationForm.get('username')!.value; // Use the correct form here
    const password = this.otpGenerationForm.get('password')!.value; // Use the correct form here

    try {
      console.log('service');
      this.otpSubscription = this.otpService
        .validateOtp(email, otp, username, password)
        .pipe(
          catchError((error: any) => {
            console.error('Error Validating OTP:', error);
            alert('Invalid OTP');
            return [];
          })
        )
        .subscribe((otp: string) => {
          console.log(otp);
          this.router.navigate(['/userScreen']);
        });
    } catch (error) {
      console.error('Error Validating OTP:', error);
    }
  }
}

  
}
