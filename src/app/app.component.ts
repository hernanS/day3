import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  strString : string;
  constructor(private httpClient: HttpClient) { }
  ngOnInit(){
    this.response();
  }

  response() : void{
    setInterval( () =>{
      this.httpClient.get <any> ('https://api.icndb.com/jokes/random').subscribe(data => {
        console.log(data.value.joke)
        this.strString = data.value.joke;
      });
    }, 5000);
  }
}
