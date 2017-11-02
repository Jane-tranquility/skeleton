import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
	@Input() data:Array<Object>;
	@Input() keys:Array<string>;

  constructor() { }

  ngOnInit() {
  	console.log(this.data);
  	console.log(this.keys);
  }

  placeHolder() {
  	document.getElementById("chatbox").setAttribute('placeholder',"");
  }

  display(){
  	document.getElementById("bodybox").style.display="initial";
  }
  close(){
  	document.getElementById("bodybox").style.display="none";
  }
  send(){}

}
