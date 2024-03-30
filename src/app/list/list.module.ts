import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
  { path: '', redirectTo: 'task', pathMatch: 'full' },
  { path: 'task', component: TasksComponent },

];

@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule, NgFor
  ]
})
export class ListModule { }
