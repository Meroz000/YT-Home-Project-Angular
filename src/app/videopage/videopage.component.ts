import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-videopage',
  imports: [CommonModule, RouterModule],
  templateUrl: './videopage.component.html',
  styleUrl: './videopage.component.css'
})

export class VideopageComponent {

  @Input() videos: {
    titulo: string; 
    descricao: string; 
    video: string;
  }[] = []; // recebe o array do pai

  selectedVideo = this.videos[0]; // por exemplo, o segundo item do array

}
