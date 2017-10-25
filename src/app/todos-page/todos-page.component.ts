import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import { getTodos, addTodo,setVisibilityFilter,toggleTodo, ADD_TODO_SUCCESS } from '../store/todo.reducer'
import { TodosEffects } from "../store/todo.effect";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css']
})
export class TodosPageComponent implements OnInit {
  filters = [
    {
      id: "SHOW_ALL",
      title: "All"
    },
    {
      id: "SHOW_COMPLETED",
      title: "Completed"
    },
    {
      id: "SHOW_ACTIVE",
      title: "Active"
    }
  ]

  activeFilter$: Observable<any>;
  addTodoSuccess$: Observable<any>;
  todos: Observable<any>;

  constructor(
    private store: Store<any>,
    private todosEffects: TodosEffects
  ) {    
    this.store.dispatch(getTodos());
    this.todos = store.select("todos")
    this.addTodoSuccess$ = this.todosEffects.addTodo$.filter(({type}) => type === ADD_TODO_SUCCESS)
    this.activeFilter$ = store.select("visibilityFilter").take(1);
  }

  addTodo(todo) {
    this.store.dispatch(addTodo(todo))
  }

  changeFilter(filter) {
    this.store.dispatch(setVisibilityFilter(filter));
    this.store.dispatch(getTodos());
  }

  toggleTodo(todo) {
    this.store.dispatch(toggleTodo(todo))
  }

  ngOnInit() {
  }

}
