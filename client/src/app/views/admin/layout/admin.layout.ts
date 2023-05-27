import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AuthService from 'src/app/core/http/auth.service';

@Component({
  selector: 'sp-admin',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './admin.layout.html',
})
export default class AdminComponent {
  service = inject(AuthService);

  open: boolean = false;
}
