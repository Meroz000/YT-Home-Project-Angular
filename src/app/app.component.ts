import { Component } from '@angular/core';
import { VideoComponent } from "./video/video.component";

interface Video {
  class: string;
  titulo: string;
  descricao: string;
  thumbnail: string;
}

@Component({
  selector: 'app-root',
  imports: [VideoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'YT-Home-Test-Main';
  videos = [{
    class: "videoframe",
    titulo: "Vídeo 1",
    descricao: "Descrição do vídeo 1",
    thumbnail: "thumb1.jpg" 
  },{
    class: "videoframe",
    titulo: "Vídeo 2",
    descricao: "Descrição do vídeo 2",
    thumbnail: "thumb2.jpg"
  },{
    class: "videoframe",
    titulo: "Vídeo 3",
    descricao: "Descrição do vídeo 3",
    thumbnail: "thumb3.jpg"
  },{
    class: "videoframe",
    titulo: "Vídeo 4",
    descricao: "Descrição do vídeo 4",
    thumbnail: "thumb4.jpg"
  },{
    class: "videoframe",
    titulo: "Vídeo 5",
    descricao: "Descrição do vídeo 5",
    thumbnail: "thumb5.jpg"
  },{
    class: "videoframe",
    titulo: "Vídeo 6",
    descricao: "Descrição do vídeo 6",
    thumbnail: "thumb6.jpg"
  },{
    class: "videoframe",
    titulo: "Vídeo 7",
    descricao: "Descrição do vídeo 7",
    thumbnail: "thumb7.jpg"
  },{
    class: "videoframe",
    titulo: "Vídeo 8",
    descricao: "Descrição do vídeo 8",
    thumbnail: "thumb8.jpg"
  },{
    class: "videoframe",
    titulo: "Vídeo 9",
    descricao: "Descrição do vídeo 9",
    thumbnail: "thumb9.jpg"
  }]

}
