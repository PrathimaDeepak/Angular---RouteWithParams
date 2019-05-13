import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ '../app.component.css' ]
})
export class HomeComponent  {
  constructor(public router: Router){

  }

  showStudentsList(){
      this.router.navigate(['/app-student']);
  }

}
