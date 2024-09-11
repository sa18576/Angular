// https://projectapi.gerasim.in/index.html

import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-api',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './put-api.component.html',
  styleUrl: './put-api.component.css'
})
export class PutApiComponent {

  ngOnInit(): void {
    this.getDepartment()
  }

  departmentObj: any = {
    'departmentId': 0,
    'departmentName': '',
    'departmentLogo': ''
  }

  departmentList: any[] = []

  http = inject(HttpClient)

  onSave() {
    debugger
    this.http.post('https://projectapi.gerasim.in/api/Complaint/AddNewDepartment', this.departmentObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        alert('Department created successfully')
        this.getDepartment()
      }
      else {
        alert(res.message)
      }
    })
  }

  getDepartment() {
    this.http.get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment').subscribe((res: any) => {
      this.departmentList = res.data
    })
  }

  onEdit(data: any) {
    this.departmentObj = data
  }

  // everything is same except for the link
  onUpdate() {
    this.http.post('https://projectapi.gerasim.in/api/Complaint/UpdateDepartment', this.departmentObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        alert('Department updated successfully')
        this.getDepartment()
      }
      else {
        alert(res.message)
      }
    })
  }

  onDelete(id: number) {

    const isDelete = confirm('Are you sure you want to delete? ')

    if (isDelete) {

      this.http.delete('https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=' + id).subscribe((res: any) => {
        debugger
        if (res.result) {
          alert('Department deleted successfully')
          this.getDepartment()
        }
        else {
          alert(res.message)
        }
      })
    }
  }


}
