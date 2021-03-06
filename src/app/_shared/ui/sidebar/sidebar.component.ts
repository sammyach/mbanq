import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private _sidebarToggle = '';
  @Input()
  set sidebarToggle(sidebarToggle: string){
    this._sidebarToggle = sidebarToggle;
  }
  get sidebarToggle(): string { return this._sidebarToggle;}

  noSidebarClass;
  toggler;
  homeLink = 'active';
  profileLink; savingsLink; loansLink; reportsLink; customersLink; usersLink; orgLink;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this._sidebarToggle = 'no-sidebar';
  }

  onToggle(){
    console.log('toggle nav in');
    // this.toggle.nativeElement.classList.toggle('active');
    console.log('toggle nav');
  }

  goTo(path: string){
    this.homeLink = this.profileLink = this.savingsLink = this.loansLink = this.reportsLink = this.customersLink = this.usersLink = this.orgLink = '';
    this.homeLink = path == 'home' ? 'active' : '';
    this.profileLink = path == 'profile' ? 'active' : '';
    this.savingsLink = path == 'savings' ? 'active' : '';
    this.loansLink = path == 'loans' ? 'active' : '';
    this.reportsLink = path == 'reports' ? 'active' : '';
    this.customersLink = path == 'customers' ? 'active' : '';
    this.usersLink = path == 'users' ? 'active' : '';
    this.orgLink = path == 'organization' ? 'active' : '';

    this.router.navigate([path]);
  }

}
