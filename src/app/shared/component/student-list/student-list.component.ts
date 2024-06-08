import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Istudent } from '../../model/student.interface';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
    stuarray:Array<Istudent>=[]
  constructor(private _studentservice:StudentService) { }

  ngOnInit(): void {
    this.stuarray=this._studentservice.getallarray()
  }

  onedit(stdin:Istudent){
      this._studentservice.studentsubject$.next(stdin)
  }
  ondelet(sid:Istudent){
        this._studentservice.deletstudeinfo(sid.stdid)
  }

}
