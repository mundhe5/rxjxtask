import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../../model/todo.interface';
import { UuidService } from '../../services/uuid.service';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  isedit:boolean=false
  todoobject!:Itodo
  @ViewChild('todoadd') todoadd!:ElementRef

  constructor(private _uuidservice:UuidService,
    private _todoservice:TodosService
  ) { }

  ngOnInit(): void {
    this._todoservice.todosubject$
          .subscribe(res =>{
            console.log(res)
            if(res){
              this.isedit=true
              this.todoobject=res
              this.todoadd.nativeElement.value=res.todoname
            }
          })
  }


  onclickadd(todoadd:HTMLInputElement){
        let todolist:Itodo={
              todoname:todoadd.value,
              todoid:this._uuidservice.genrateuuid(),
        }
        console.log(todolist)
        todoadd.value=''
        this._todoservice.addtodoitem(todolist)
  }
  onupdate(todoadd:HTMLInputElement){
    let valueupdate=todoadd.value as string
    let uodateobj:Itodo={
          todoname:todoadd.value,
          todoid:this.todoobject.todoid
    }

        console.log(uodateobj)
        todoadd.value=''
        this._todoservice.updatetodo(uodateobj)
        this.isedit=false
  }

}
