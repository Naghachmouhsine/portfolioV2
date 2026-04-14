import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../../../models/Skill';
import { SkillsServiceService } from '../../../services/skills.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
    skills!:Observable<Skill[]>
    constructor(private service:SkillsServiceService){
      this.skills=service.get()
    }
}
