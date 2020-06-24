import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloqueService } from 'src/app/shared/services/bloque.service';
import { Bloque } from 'src/app/shared/models/bloque.model';

@Component({
  selector: 'app-bloques',
  templateUrl: './bloques.page.html',
  styleUrls: ['./bloques.page.scss'],
})
export class BloquesPage implements OnInit {

  bloques: Bloque[];

  constructor(
    public activatedRoute: ActivatedRoute,
    public bloqueService: BloqueService,
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((param) => {

      this.bloqueService.getBloquesPorLibro(parseInt(param.get('libro-id'))).subscribe( (response: Bloque[]) => {

        this.bloques = response;

      } );

    })

  }

}
