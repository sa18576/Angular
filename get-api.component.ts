import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AlertComponent } from "../../../reusable/alert/alert.component";
import { MyButtonComponent } from '../../../reusable/my-button/my-button.component';
import { Customer } from '../../../model/class/customer';
import { IUser } from '../../../model/interface/iuser';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent, MyButtonComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: IUser[] = []
  customerList: Customer [] = []

  alertMsg: string = ''

  // can be declared this way also
  // http = inject(HttpClient)

  // dependency injection
  constructor(private http: HttpClient){
    this.getAllUser()
  }

  getAllUser(){
    // debugger
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result : any) => {
      // debugger
      this.userList = result;
    })
  }

  getAllCustomer(){
    // debugger
    this.http.get('https://projectapi.gerasi.in/api/RealEstate/GetAllCustomers').subscribe((result: any) => {
      this.customerList = result.data;
    }, error =>{
      // debugger
    })
  }

  changeMsg(){
    debugger
    this.alertMsg = 'alexandra'
  }

}
