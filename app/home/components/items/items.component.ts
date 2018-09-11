import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'Items',
  moduleId: module.id,
  templateUrl: './items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsComponent {
  @Input() items: any[];
  @Output() update = new EventEmitter();
}