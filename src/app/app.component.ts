import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Component/Core/header/header.component";
import { FooterComponent } from "./Component/Core/footer/footer.component";
import { NewsletterComponent } from "./Component/Home/newsletter/newsletter.component";
import { NgIf } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NewsletterComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SPARKALS';

  // To hide header, footer & newsletter for required panels like admin
  showLayout = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  this.router.events
  .pipe(filter(event => event instanceof NavigationEnd))
  .subscribe(() => {
    let route = this.router.routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    this.showLayout = !route.snapshot.data['hideLayout'];
  });

}
}
