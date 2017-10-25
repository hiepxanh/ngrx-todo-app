import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosPageComponent } from './todos-page/todos-page.component';

const routes: Routes = [
    {path:"",pathMatch:"full",redirectTo:"todos"},
    { path: 'todos', component: TodosPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TodosPageRoutingModule { }

export const routedComponents = [TodosPageComponent];