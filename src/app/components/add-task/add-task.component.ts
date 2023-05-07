import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from "../../Task";
import { UiService } from "../../services/ui.service";
import { Subscription } from "rxjs";


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  content?: string;
  day?: string;
  reminder: boolean = false;
  showAddTask?: boolean;
  subscription?: Subscription;


  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }


  onSubmit() {
    if (!this.content) {
      alert('PLEASE ADD A TASK');
      return
    } else if (!this.day) {
      alert('PLEASE ADD A DAY');
      return
    }
    const newTask: Task = {
      text: this.content,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddTask.emit(newTask);
    //@todo - emit event
    this.content,
      this.day,
      this.reminder = false;
  }
}
