import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell-home',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './shell-home.html',
  styleUrl: './shell-home.scss'
})
export class ShellHome {

}
