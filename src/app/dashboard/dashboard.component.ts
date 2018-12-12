import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './classes/todo';
import { DateService } from './services/date.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todos: Todo[] = []
  days: Date[] = []
  hours: string[] = []
  constructor(public _todoService: TodoService, public _dateService: DateService) { }

  ngOnInit() {
    this.getTodos()
    this.getDaysAndHours()
  }

  getTodos() {
    this.todos = this._todoService.get()
  }

  getDaysAndHours() {
    this.days = this._dateService.getDays()
    this.hours = this._dateService.getHours()
  }

  getTodo(date:Date, hour:string):Todo{

    let todoArr = this.todos.filter(todo=> new Date(todo.date).getDate()==date.getDate() && todo.hour==hour)

    if (todoArr.length>0){
      console.log('Llega')
      return todoArr[0]
    }

    return new Todo("", new Date(), "")
  }

}
