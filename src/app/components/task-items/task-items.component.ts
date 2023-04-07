import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../../Task";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent {
  @Input() task?: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;
  onDelete(task:any) {
    this.onDeleteTask.emit(task);
  }
  onToggle(task:any) {
    this.onToggleReminder.emit(task);
  }

}
