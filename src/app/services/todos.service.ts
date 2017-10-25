import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/mapTo'
@Injectable()
export class TodosService {

  constructor() { }

  getTodos(filter) {
    const todos = [
      {id: 1, title: "Learn ngrx/store", completed: true}, 
      {id: 2, title: "Learn ngrx/effects", completed: false}
    ]
    return Observable.timer(1000).mapTo(this.getVisibleTodos(todos,filter))
  }

  getVisibleTodos(todos,filter) {
    switch (filter) {
      case "SHOW_ALL":
        return todos;
      case "SHOW_COMPLETED":
        return todos.filter(t => t.completed);
      default:
        return todos.filter(t => !t.completed);
    }
  }

  addTodo(title) {
    return Observable.timer(2000).mapTo({id: Math.random(), title, completed: false})
  }
}
