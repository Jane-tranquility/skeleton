import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	data=[{'firstName':'Alison', 'lastName':'DiLaurentis','emailAddress':'AlisonDiLaurentis@gmail.com','message':'How are you?'},
		  {'firstName':'Spencer', 'lastName':'Hastings','emailAddress':'SpencerHastings@gmail.com','message':'I am good!'},
		  {'firstName':'Hanna', 'lastName':'Marin','emailAddress':'HannaMarin@gmail.com','message':'Where have you been?'}];
    keys=Object.keys(this.data[0]);

  constructor() { }

  ngOnInit() {
  	console.log(this.data);
  	console.log(this.keys);
  }

}
