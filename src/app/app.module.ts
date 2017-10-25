import { TodosPageRoutingModule } from './app-routing.module';
import { TodosEffects } from './store/todo.effect';
import { TodosService } from './services/todos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { todos,visibilityFilter } from "./store/todo.reducer";
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FiltersComponent } from './filters/filters.component';
import { TodosPageComponent } from './todos-page/todos-page.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent,
    AddTodoComponent,
    FiltersComponent,
    TodosPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodosPageRoutingModule,
    StoreModule.forRoot({todos,visibilityFilter}),
    StoreDevtoolsModule.instrument({maxAge:25}),
    EffectsModule.forRoot([TodosEffects])
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
