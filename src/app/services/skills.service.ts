import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SKILLS } from '../data/static-data';
import { Skill } from '../models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsServiceService {
  private skills: Skill[] = [...SKILLS];

  addMany(skills: Skill[]): Promise<void> {
    skills.forEach(s => {
      const id = `${Date.now()}${Math.random().toString(36).substr(2, 5)}`;
      this.skills.push({ ...s, id });
    });
    return Promise.resolve();
  }

  get(): Observable<Skill[]> {
    return of(this.skills);
  }
}
