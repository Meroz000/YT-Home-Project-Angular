import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  OnClick() {
    // Aqui você pode implementar a lógica para lidar com o clique no vídeo
    console.log(`Vídeo selecionado: ${this.titulo}`);

    this.router.navigate([
      '/video',
    ], { queryParams: {video: this.video, titulo:  this.titulo, descricao: this.descricao }} );}

}


