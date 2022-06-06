import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidebarClassToggle = new EventEmitter();

  toggleFlag = false;
  toggleIcon = 'bars';
  constructor() { }

  ngOnInit(): void {
    this.sidebarClassToggle.emit('no-sidebar');
    this.toggleIcon = 'bars';
  }

  onToggle(){
    console.log('header: in onToggle');

    this.toggleFlag = !this.toggleFlag;
    this.sidebarClassToggle.emit(this.toggleFlag ? '' : 'no-sidebar');
    this.toggleIcon = this.toggleFlag ? 'times' : 'bars';
  }

}
