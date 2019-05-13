import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl:'./student.component.html',
  styleUrls: [ '../app.component.css' ]
})
export class StudentComponent  {
    studentsList = [{id:'15001', name:'Anna', age:12, gender:'Female', subjects:['Maths','Physics']},
                    {id:'15002', name:'Ben', age:10, gender:'Male', subjects:['Economics','History']},
                    {id:'15003', name:'Charlie', age:15, gender:'Female', subjects:['Chemistry','Biology']},
                    {id:'15004', name:'Dan', age:11, gender:'Male', subjects:['History','Geography']},
                    {id:'15005', name:'Esmee', age:13, gender:'Female', subjects:['Physics','Chemistry']}];

    constructor(public router: Router){}

    goToHome() {
      this.router.navigate(['/']);
    }

  getStudentDetails(student) {
    this.router.navigate(['/view-details', student.id]);
  }
}

