import { Injectable } from '@angular/core';
import { Projet } from '../models/Projet';
import { Observable, of } from 'rxjs';
import { PROJETS } from '../data/static-data';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {
  private projets: Projet[] = [...PROJETS];

  get(): Observable<Projet[]> {
    return of(this.projets);
  }

  add(projet: Projet): Promise<Projet> {
    const id = `${Date.now()}`;
    const newProjet = { ...projet, id };
    this.projets.push(newProjet);
    return Promise.resolve(newProjet);
  }

  delete(id: string): Promise<void> {
    this.projets = this.projets.filter(p => p.id !== id);
    return Promise.resolve();
  }

  update(projet: Projet): Promise<void> {
    if (!projet.id) return Promise.reject('ID requis pour mise à jour');
    const idx = this.projets.findIndex(p => p.id === projet.id);
    if (idx === -1) return Promise.reject('Projet non trouvé');
    this.projets[idx] = projet;
    return Promise.resolve();
  }

  uploadImages(files: File[]): Observable<string[]> {
    const urls = Array.from(files).map(f => `assets/images/projets/${f.name}`);
    return of(urls);
  }

  uploadProgress$ = of(100);
}
