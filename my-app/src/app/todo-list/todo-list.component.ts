import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  constructor(){}

  items = ['todo1', 'todo2', 'todo3'];

  addTodo(todo: string): void { 
    this.items.push(todo);
  }

  removeTodo(todo: string): void {
    this.items.forEach((value,index) => {
      if(value == todo) this.items.splice(index, 1);
    });
  }

  ngOnInit(): void {
    
  }

}
