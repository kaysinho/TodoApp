import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = []
  constructor() { }

  add(todo:Todo){
    this.todos.push(todo)
    localStorage.setItem("Todos", JSON.stringify(this.todos))
  }

  get():Todo[]{
    this.todos = JSON.parse(localStorage.getItem('todos'))
    return this.todos
  }
}
