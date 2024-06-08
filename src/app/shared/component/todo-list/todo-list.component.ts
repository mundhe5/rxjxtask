import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Itodo } from '../../model/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    todoarraylist:Array<Itodo>=[]
  constructor(private _todoservice:TodosService) { }

  ngOnInit(): void {
    this.todoarraylist=this._todoservice.alltodolist()
  }
  onedit(edittodo:Itodo){
      this._todoservice.todosubject$.next(edittodo)
  }
  ondelet(todod:Itodo){
        this._todoservice.delettodolist(todod.todoid)
  }

}
