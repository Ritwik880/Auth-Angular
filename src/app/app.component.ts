import { Component } from '@angular/core';

import { UsersDataService } from './services/users-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  // userData:any={};
  // getData(data: NgForm) {
  //   console.warn(data);
  //   this.userData=data

  // }

 


  // Fetching API
  // users: any;
  // pure:any;
  // // a:any;
  // constructor(private userData: UsersDataService) {
  //   userData.users().subscribe((data) => {
  //     console.warn("data", data);

  //     this.users = data
  //     this.pure = JSON.stringify(this.users)


  //     // this.pure = this.users.map(function(a:any) {return a["_id"];});
  //     // this.pure = Object.values(this.users)
  //   });
  //   // console.warn(this.users);


  // }


}
