import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  newTodo: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  addTodo(): void {
    if (this.newTodo.trim()) {
      const todo = { title: this.newTodo };
      this.todoService.addTodo(todo).subscribe(todo => {
        this.todos.push(todo);
        this.newTodo = '';  
      });
    }
  }

  deleteTodo(index: number): void {
    this.todoService.deleteTodo(index).subscribe(() => {
      this.todos.splice(index, 1);  
    });
  }
}

