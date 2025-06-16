import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VideoComponent } from '../video/video.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule, VideoComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  videos = [{
    class: "videoframe",
    titulo: "Vídeo 1",
    descricao: "Descrição do vídeo 1",
    thumbnail: "thumb1.jpg",
    video: "sample-1.mp4" 
  },{
    class: "videoframe",
    titulo: "Vídeo 2",
    descricao: "Descrição do vídeo 2",
    thumbnail: "thumb2.jpg",
    video: "sample-2.mp4"
  },{
    class: "videoframe",
    titulo: "Vídeo 3",
    descricao: "Descrição do vídeo 3",
    thumbnail: "thumb3.jpg",
    video: "sample-3.mp4"
  },{
    class: "videoframe",
    titulo: "Vídeo 4",
    descricao: "Descrição do vídeo 4",
    thumbnail: "thumb4.jpg",
    video: "sample-4.mp4"
  },{
    class: "videoframe",
    titulo: "Vídeo 5",
    descricao: "Descrição do vídeo 5",
    thumbnail: "thumb5.jpg",
    video: "sample-5.mp4"
  },{
    class: "videoframe",
    titulo: "Vídeo 6",
    descricao: "Descrição do vídeo 6",
    thumbnail: "thumb6.jpg",
    video: "sample-1.mp4"
  },{
    class: "videoframe",
    titulo: "Vídeo 7",
    descricao: "Descrição do vídeo 7",
    thumbnail: "thumb7.jpg",
    video: "sample-2.mp4"
  },{
    class: "videoframe",
    titulo: "Vídeo 8",
    descricao: "Descrição do vídeo 8",
    thumbnail: "thumb8.jpg",
    video: "sample-3.mp4"
  },{
    class: "videoframe",
    titulo: "Vídeo 9",
    descricao: "Descrição do vídeo 9",
    thumbnail: "thumb9.jpg",
    video: "sample-4.mp4"
  }]

@Input() IsOpen = false;
@Input() User = '';
@Input() Email = '';

  ShowModal() {
    this.IsOpen = true;
  }
  closeModal() {
    this.IsOpen = false;
  }
}
