import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = []
  constructor() {
    this.create()
   }
 
  add(todo:Todo){
    this.todos.push(todo)
    localStorage.setItem("Todos", JSON.stringify(this.todos))
  }

  get():Todo[]{
    this.todos = JSON.parse(localStorage.getItem('Todos'))
    return this.todos
  }

  private create(){
    try{
      let _todos : Todo[] = JSON.parse(localStorage.getItem('Todos'))
      if (_todos==undefined || _todos==null){
        localStorage.setItem("Todos", "")
      }
    }catch(e){
      localStorage.setItem("Todos", "")
    }
  }
}
