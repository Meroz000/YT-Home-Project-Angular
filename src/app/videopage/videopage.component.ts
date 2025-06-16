import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-videopage',
  imports: [CommonModule, RouterModule],
  templateUrl: './videopage.component.html',
  styleUrl: './videopage.component.css'
})

export class VideopageComponent implements OnInit {

  video: string = '';
  titulo: string = '';
  descricao: string = '';

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.video = params['video'] || '';
      this.titulo = params['titulo'] || '';
      this.descricao = params['descricao'] || '';
    })
  }
}
