import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localItem: string;
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {}
  deleteTodo(todo: Todo): void {
    console.log('delete event success!!', todo);
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    } else {
      console.log('No Such Component');
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todo): void {
    console.log('add event success!!', todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo): void {
    console.log('toggle event success!!', todo);
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos[index].active = !this.todos[index].active;
    } else {
      console.log('No Such Component');
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
