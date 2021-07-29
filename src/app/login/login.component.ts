import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  userName = ""
  password = ""
  credentials = [{
    uName: "jason",
    pass: "momoa"
  }, {
    uName: "garry",
    pass: "sandhu"
  },{
    uName: "richard",
    pass: "smith" 
  }]
  correct = false
  checkCredentials(userName: any, password: any){
    this.credentials.map((i)=>{
      if((userName == i.uName) && (password == i.pass)){
        this.correct = true
      }
    })
    if (this.correct == true){
      alert("Welcome " + userName)
      this.router.navigateByUrl('/account/'+ userName);
    }else{
      alert("Incorrect Username or Password")
    }
    this.userName  = ""
    this.password = ""
    
  }
}

