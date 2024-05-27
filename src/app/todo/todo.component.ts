import {Component} from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  newTask: string = '';
  tasks: Task[] = [];
  filter: string = 'all';


  get filteredTasks(): Task[] {
    if (this.filter === 'active') {
      return this.tasks.filter(task => !task.completed);
    } else if (this.filter === 'completed') {
      return this.tasks.filter(task => task.completed);
    }
    return this.tasks;
  }


  addTask(): void {
    if (this.newTask.trim()) {
      this.tasks.push({name: this.newTask.trim(), completed: false});
      this.newTask = '';
    }
  }

  updateTask(task: Task): void {
    //TODO: Task update logic can be handled here if needed
  }

  deleteTask(task: Task): void {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  filterTasks(filter: string): void {
    this.filter = filter;
  }
}
