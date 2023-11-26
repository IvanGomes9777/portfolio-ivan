import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { IntroMyselfComponent } from "./intro-myself/intro-myself.component";
import { IconsMailComponent } from "./icons-mail/icons-mail.component";
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, NavbarComponent, IntroMyselfComponent, IconsMailComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, ContactFormComponent]
})
export class AppComponent {
  title = 'my-app';
}
