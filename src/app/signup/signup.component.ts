import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private http: HttpClient, private router:Router) { }
  signupForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })
  signupImg: string = "assets/image/signup.png";
  signupUser() {
    // console.warn(data);
    this.http.post<any>("http://localhost:3000/signUp", this.signupForm.value).subscribe((res)=>{
      alert("Signup Success!")
      this.signupForm.reset();
      this.router.navigate(['login'])
    }, err=>{
      console.warn(err);
      
      // alert("Something went wrong!")
    })
   

  }
 

  

  ngOnInit(): void {
  }

}
