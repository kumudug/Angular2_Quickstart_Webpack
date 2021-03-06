import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  //template: '<h1>My First Angular 2 App</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }

//Every Angular application has at least one component: the root component, named AppComponent here.
//Components are the basic building blocks of Angular applications. A component controls a portion of the screen—a view—through its associated template.