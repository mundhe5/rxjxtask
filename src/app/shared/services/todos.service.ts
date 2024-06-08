import { Injectable } from '@angular/core';
import { Itodo } from '../model/todo.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
      todoarray:Array<Itodo>=[
        {
          todoname:'samsung',
          todoid:'1'
        },
        {
          todoname:'redmi',
          todoid:'2'
        }
      ]

      todosubject$:Subject<Itodo>=new Subject<Itodo>()
  constructor() { }

  alltodolist(){
    return this.todoarray
  }
  addtodoitem(todoi:Itodo){
    this.todoarray.unshift(todoi)
  }
  updatetodo(todou:Itodo){
    let getindex=this.todoarray.findIndex(u=>u.todoid===todou.todoid)
    this.todoarray[getindex]=todou
  }
  delettodolist(id:string){
        let getindex=this.todoarray.findIndex(d=>d.todoid===id)
        this.todoarray.splice(getindex,1)
  }
}
