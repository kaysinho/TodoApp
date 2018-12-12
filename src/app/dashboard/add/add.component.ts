import { Component, OnInit } from '@angular/core';
import { DateService } from '../services/date.service';
import { Todo } from '../classes/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  days: Date[] = []
  hours: string[] = []
  todo:Todo = new Todo("", new Date(), "")
  constructor(public _datesService:DateService, public _todoService:TodoService) { }

  ngOnInit() {
    this.days = this._datesService.getDays()
    this.hours = this._datesService.getHours()
  }


  add(){
    let myTodo: Todo = new Todo(this.todo.description, this.todo.date, this.todo.hour)
    this._todoService.add(this.todo)
  }
}
