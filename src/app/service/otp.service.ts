import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  private apiGenrateUrl = API_BASE_URL+'/login/generateOtp';
  private apivalidateUrl= API_BASE_URL+'/login/verifyOtp';// Replace with the actual API endpoint URL

  constructor(private http: HttpClient) { }

  generateOtp(email: string): Observable<string> {
    console.log(this.http.post<string>(this.apiGenrateUrl, { email }));
    return this.http.post<string>(this.apiGenrateUrl, { email });
  }
  validateOtp(email: string,otp:String,username:String,password:string): Observable<string> {
    console.log(this.http.post<string>(this.apivalidateUrl, { email , otp,}));
    return this.http.post<string>(this.apivalidateUrl, { email ,otp, username,password});
  }

}
