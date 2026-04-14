import { Component, OnInit } from '@angular/core';
import { Projet } from '../../../../models/Projet';
import { ProjetComponent } from "../projet/projet.component";
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProjetsService } from '../../../../services/projets.service';

@Component({
  selector: 'app-projets',
  imports: [ProjetComponent,CommonModule],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent {
  projets!: Observable<Projet[]>
  constructor(private service:ProjetsService){
    this.projets=this.service.get()
  }

}
