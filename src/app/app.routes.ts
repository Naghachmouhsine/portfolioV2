import { Routes } from '@angular/router';
import { PagePublicComponent } from './componant/portfolioPublic/page-public/page-public.component';
import { HomeComponent } from './componant/portfolioPublic/home/home.component';
import { ProjetComponent } from './componant/portfolioPublic/projets/projet/projet.component';
import { ProjetsComponent } from './componant/portfolioPublic/projets/projets/projets.component';
import { SkillComponent } from './componant/portfolioPublic/skill/skill.component';
export const routes: Routes = [
    {path:"",redirectTo:"portfolio",pathMatch:"full"},
    // {path:"",redirectTo:"portfolio"},
    // {path:"**",redirectTo:"portfolio"},
    {
        path : "portfolio", 
        component : PagePublicComponent,
        children : [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {path:"home",component:HomeComponent},
            {path:"projets",component:ProjetsComponent},
            {path:"skills",component:SkillComponent}
        ]
    },
    // {path : "crude",component:PagePrincipaleComponent}
];
