import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR, ADD_TODO_SUCCESS, ADD_TODO_ERROR, ADD_TODO } from './todo.reducer';
import { TodosService } from './../services/todos.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from "@ngrx/effects";

@Injectable()
export class TodosEffects {
    constructor(
        private actions$: Actions, 
        private store: Store<any>,
        private todoService: TodosService
    ) {
    }

    @Effect() getTodos$ = this.actions$.ofType(GET_TODOS)
    .withLatestFrom(this.store.select("visibilityFilter"), (action,filter) => filter)
    .switchMap(filter => 
        this.todoService.getTodos(filter)
        .map(todos => ({type: GET_TODOS_SUCCESS, payload: todos}))
        .catch(() => Observable.of({type: GET_TODOS_ERROR}))
    )
    
    @Effect() addTodo$ = this.actions$.ofType(ADD_TODO)
    .switchMap((action:any) => 
        this.todoService.addTodo(action.payload.title)
        .map(todo => ({type:ADD_TODO_SUCCESS, payload: todo}))
        .catch(() => Observable.of({type: ADD_TODO_ERROR}))
    )
}