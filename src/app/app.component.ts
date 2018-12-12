import { Component } from '@angular/core';
import { AuthService } from './_service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private authService: AuthService) {}

  sair() {
    if (confirm('Deseja realmente sair?')) {
      this.authService.logout();
    }
  }
}
