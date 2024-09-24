import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  newTask: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data.completed_list;
    });
  }

  addTask(): void {
    if (this.newTask.trim()) {
      this.todoService.addTask(this.newTask).subscribe(() => {
        this.fetchTodos();  // Reload tasks after adding
        this.newTask = '';  // Clear the input
      });
    }
  }

  toggleTask(id: number): void {
    this.todoService.toggleTask(id).subscribe(() => {
      this.fetchTodos();  // Reload tasks after toggling
    });
  }

  deleteTask(id: number): void {
    this.todoService.deleteTask(id).subscribe(() => {
      this.fetchTodos();  // Reload tasks after deletion
    });
  }
}
