import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-countpicker',
  imports: [
    DecimalPipe
  ],
  templateUrl: './countpicker.component.html',
  styleUrl: './countpicker.component.css'
})
export class CountpickerComponent {
  @Output() countEvent = new EventEmitter<number>()
  @Input() value: number = 0
  @Input() max: number = 23

  increment() {
    this.countEvent.emit(this.value != this.max ? this.value + 1 : 0);

  }

  decrement() {
    this.countEvent.emit(this.value != 0 ? this.value - 1 : this.max)
  }

}
