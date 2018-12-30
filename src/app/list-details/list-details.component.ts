import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Companies } from '../companies';


@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {

  deleteVal:boolean = true;
  updateForm = new Companies();

  @Input() ldata;

  address2 = false;

  @Output() childEvent = new EventEmitter();
  @Output() archEvent = new EventEmitter();


  edit = false;
  nonEdit = true;
  status = ['Reasearching','Approved', 'Pending Approval', 'Declined'];
  
  constructor() { }

  ngOnInit() {
  }
  
  
  ShowEditForm(){
    this.edit=true;
    this.nonEdit = false;
  }
  
  CancelEdit(){
    this.nonEdit=true;
    this.edit=false;
  }

  DeleteComp(info:any[]){
    this.childEvent.emit(info);
    this.ldata = []; 
  }

  ArchiveComp(info){
    console.log(info);
    this.archEvent.emit(info.name);
  }

  changeEvent(event) {
    if (event.target.checked) {
        this.deleteVal= false;
    }
    else {
        this.deleteVal= true;
    }   
}


/*SaveChanges(){
  this.updateForm.address1 = address1.value;
  this.updateForm.address2 = document.getElementById("address2").nodeValue;
  this.updateForm.city = document.getElementById("city").nodeValue;
  this.updateForm.state = document.getElementById("state").nodeValue;

  console.log(this.updateForm);
}*/

}
