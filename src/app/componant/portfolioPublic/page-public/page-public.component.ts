import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-page-public',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './page-public.component.html',
  styleUrl: './page-public.component.css'
})
export class PagePublicComponent {

}
