import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projet } from '../../../../models/Projet';
@Component({
  selector: 'app-projet',
  imports: [CommonModule],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent {
  @Input() projet: Projet = {
    id: '',
    titre: '',
    description: '',
    technos: [],
    photos: [],
    github: '',
    num: 0
  };


  currentImage = 0;

  setImage(index: number) {
    if (!this.projet.photos || this.projet.photos.length === 0) return;
    this.currentImage = Math.max(0, Math.min(index, this.projet.photos.length - 1));
  }

  nextImage() {
    if (!this.projet.photos || this.projet.photos.length === 0) return;
    this.currentImage = (this.currentImage + 1) % this.projet.photos.length;
  }

  prevImage() {
    if (!this.projet.photos || this.projet.photos.length === 0) return;
    this.currentImage = (this.currentImage - 1 + this.projet.photos.length) % this.projet.photos.length;
  }

}
