import { Injectable } from '@angular/core';
import { Istudent } from '../model/student.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentarray:Array<Istudent>=[
    {
      fname:'jems',
      lname:'don',
      email:'jemsd@gmail.com',
      contact:1123456789,
      stdid:'1'
    },
    {
      fname:'jonsan',
      lname:'jjjj',
      email:'jonson@gmail.com',
      contact:22345567891,
      stdid:'2'
    }
  ]

  studentsubject$:Subject<Istudent>=new Subject<Istudent>()

  constructor() { }

  getallarray(){
    return this.studentarray
  }

  studentadded(stda:Istudent){
    this.studentarray.unshift(stda)
  }
  updatestudentinfo(std:Istudent){
    let getindex=this.studentarray.findIndex(s=>s.stdid===std.stdid)
    this.studentarray[getindex]=std
  }
  deletstudeinfo(stdoid:string){
    let getindex=this.studentarray.findIndex(s=>s.stdid===stdoid)
    this.studentarray.splice(getindex,1)
  }
}
