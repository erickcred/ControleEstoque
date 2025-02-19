import { Component, Input } from '@angular/core';
import { MatModule } from '@shared/mat-module/mat.module';

@Component({
  selector: 'app-header-component',
  imports: [
    MatModule,
  ],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.scss'
})
export class HeaderComponentComponent {
  @Input() titulo: string = '';
}
