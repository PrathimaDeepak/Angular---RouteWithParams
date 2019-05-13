import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {StudentComponent} from './student.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'view-details',
  templateUrl: './view-student.component.html',
  styleUrls: [ '../app.component.css' ]
})
export class ViewStudentComponent {
  id: any;
  student: any;
  studentComponent = new StudentComponent(null);
      constructor(private route: ActivatedRoute, public router: Router) {
          this.route.params.subscribe(params => this.id = params);
          this.getStudentDetails(this.id.studentId);
      }

  getStudentDetails(id) {
        console.log(id);
        this.studentComponent.studentsList.forEach( student => {
             if (student.id === id) {
               this.student = student;
               console.log(this.student);
             }
        });
  }
  showStudentsList() {
    this.router.navigate(['/app-student']);
  }

}
