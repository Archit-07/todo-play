import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  title: string;
  desc: string;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    const todo = {
      sno: 1,
      title: this.title,
      desc: this.desc,
      active: true,
    };
    this.todoAdd.emit(todo);
    console.log('Add todo success', todo);
    this.title = '';
    this.desc = '';
  }
}
