import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  @Input() thumbnail: string = '';
  @Input() titulo: string = '';
  @Input() descricao: string = '';
  @Input() video: string = '';

}
