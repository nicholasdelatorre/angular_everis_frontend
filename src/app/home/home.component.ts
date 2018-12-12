import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../_service/filmes.service';
import { Filme } from '../_models/filme.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filmes: Filme[] = [];

  constructor(private service: FilmesService) { }

  ngOnInit() {
    this.service.listar().subscribe(data => {this.filmes = data; });
  }

}
