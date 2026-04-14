import { Component } from '@angular/core';
import { Cv } from '../../../models/Cv';
import { CvVersionService } from '../../../services/cv-version.service';
import { Profile } from '../../../models/Profile';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cv!: Cv[];
  profile!:Profile;


  constructor(private service: CvVersionService) {
    this.service.getProfile().subscribe((data: Profile[]) => {
      this.profile = data[0]
      // console.log(this.cv)
    });
  }
  viewPdf() {
    window.open(this.profile.cv, "_blank")
  }
}
