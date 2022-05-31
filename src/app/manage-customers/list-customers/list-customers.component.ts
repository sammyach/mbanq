import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {

  customers;
  selectedCustomers;
  loading;
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.ds.getAllCustomers()
      .subscribe(res=>{
        this.customers = res;
      },err =>{
        console.log('err: ', err);

      })
  }

}
