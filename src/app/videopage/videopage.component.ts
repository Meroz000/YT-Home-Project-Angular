import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { VideoComponent } from '../video/video.component';
import { AppComponent } from "../app.component";


@Component({
  selector: 'app-videopage',
  imports: [CommonModule, VideoComponent, AppComponent],
  templateUrl: './videopage.component.html',
  styleUrl: './videopage.component.css'
})
export class VideopageComponent {
  @Input() thumbnail: string = '';
  @Input() titulo: string = '';
  @Input() descricao: string = '';
  @Input() video: string = '';
}
