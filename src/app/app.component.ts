import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mbanqSPA';
  private _sideToggle='';

  set sideToggle(data: string){
    this._sideToggle = data;
  }

  get sideToggle(){ return this._sideToggle; }
  constructor(public auth: AuthService){}

  toggleSidebar(data){
    console.log(data);
    this.sideToggle = data;
  }
}
