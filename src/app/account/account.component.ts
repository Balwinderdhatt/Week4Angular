import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.userName = this.route.snapshot.params.userName;
  }
  userName = " "
}
