import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  apiUrl: string = 'https://projectapi.gerasim.in/api/Complaint/'

  constructor(private http: HttpClient) {}

  getAllDept(){
   return this.http.get(`${constant.API_URL} ${constant.DEPARMENT_METHODS.GET_PARENT_DEPT}`);
  }

  saveNewDept(obj:any){
    return this.http.post(`${constant.API_URL} ${constant.DEPARMENT_METHODS.ADD_NEW_DEPT}`,obj)
  }

  addTwoNo(num1: number, num2: number){
    return num1+num2
  }
}
