import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'two-button',
  templateUrl: './two-button.component.html',
  styleUrls: ['./two-button.component.css']
})
export class TwoButtonComponent implements OnInit {

	@Input() textLabel1:string;
	@Input() textLabel2:string;


  constructor() { }

  ngOnInit() {
  	console.log(this.textLabel1);
  	console.log(this.textLabel2);
  }
  login(){}
  cancel(){}

}
