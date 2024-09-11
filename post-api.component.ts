import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';
import { AlertComponent } from "../../../reusable/alert/alert.component";
import { MyButtonComponent } from '../../../reusable/my-button/my-button.component';
import { Department } from '../../../model/class/customer';
import { IDepartmentList } from '../../../model/interface/iuser';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, AlertComponent, MyButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {
getData(data: any) {
  debugger
}

  ngOnInit(): void {
    this.getDepartment()
  }

  departmentObj: Department = new Department()
  departmentList: IDepartmentList[] = []

  http = inject(HttpClient)

  constructor(private deptSrv: DepartmentService) {
    const result = this.deptSrv.addTwoNo(9,3);
  }

  // onSave(){
  //   debugger
  //   this.http.post('https://projectapi.gerasim.in/api/Complaint/AddNewDepartment',this.departmentObj).subscribe((res : any) => {
  //   debugger
  //     if(res.result){
  //       alert('Department created successfully')
  //       this.getDepartment()
  //     }
  //     else{
  //       alert(res.message)
  //     }
  //   })
  // }

  onSave() {
    this.deptSrv.saveNewDept(this.departmentObj).subscribe((res: any) => {
      if (res.result) {
        alert('Department created successfully')
        this.getDepartment()
      }
      else {
        alert(res.message)
      }
    })
  }

  // getDepartment(){
  //   this.http.get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment').subscribe((res : any) => {
  //     this.departmentList = res.data
  //   })
  // }

  getDepartment() {
    debugger
    this.deptSrv.getAllDept().subscribe((res: any) => {
      debugger
      this.departmentList = res.data
    })
  }

}
