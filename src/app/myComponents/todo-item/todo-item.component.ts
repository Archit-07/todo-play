import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheck: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick(todo: Todo): void {
    this.todoDelete.emit(todo);
    console.log('onClick has been triggered');
  }

  onCheckBox(todo: Todo): void {
    this.todoCheck.emit(todo);
    console.log('onCheckBox is toggled');
  }
}
