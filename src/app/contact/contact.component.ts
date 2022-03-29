import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private http: HttpClient, private router:Router) { }
   // Reactive Form
   cntImg:string = "assets/image/contact.png";
   allData: any = {};
   contactForm = new FormGroup({
     user: new FormControl('', [Validators.required]),
     email: new FormControl('', [Validators.required, Validators.email]),
     message: new FormControl('', [Validators.required, Validators.minLength(5)])
   })
   contactUser() {
    this.http.post<any>("http://localhost:3000/contact", this.contactForm.value).subscribe((res)=>{
      alert("Thankyou for contacting us!")
      this.contactForm.reset();
      // this.router.navigate(['login'])
    }, err=>{
      console.warn(err);
      
      // alert("Something went wrong!")
    })
 
   }
  

  

  ngOnInit(): void {
  }

}
