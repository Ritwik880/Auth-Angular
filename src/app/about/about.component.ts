import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
// import { UsersDataService } from '../services/users-data.service';
import { UsersDataService } from './users-data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data: string = "Hello World!"
  users: any;
  constructor(private userData: UsersDataService) {
    userData.users().subscribe((res) => {
      console.warn("res", res);

      this.users = res

    })
  }

  ngOnInit(): void {
  }

}
