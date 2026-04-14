import { Injectable } from '@angular/core';
import { Cv } from '../models/Cv';
import { Profile } from '../models/Profile';
import { Observable, of } from 'rxjs';
import { CVS, PROFILES } from '../data/static-data';

@Injectable({
  providedIn: 'root'
})
export class CvVersionService {
  private cvs: Cv[] = [...CVS];
  private profiles: Profile[] = [...PROFILES];

  uploadCv(file: File): Observable<string> {
    const url = `assets/cv/${file.name}`;
    return of(url);
  }

  add(cv: Cv): Promise<Cv> {
    const id = `${Date.now()}`;
    const newCv = { ...cv, id };
    this.cvs.push(newCv);
    return Promise.resolve(newCv);
  }

  get(): Observable<Cv[]> {
    return of(this.cvs);
  }

  getProfile(): Observable<Profile[]> {
    return of(this.profiles.filter(p => p.isActive));
  }
}
