/*Importing all components  */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Companies } from '../companies';
import { Router } from '@angular/router'
import { UserEdit } from '../user-edit';
import { CompaniesService } from '../companies.service';


@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {

  deleteVal:boolean = true;

  //Input directive to recieve the information of list item selected
  @Input() ldata;

  //Object to old the form data
  userModel;

  //Variable set when address line 2 value is present
  address2 = false;

  //Output directive to send the event when delete button is clicked
  @Output() childEvent = new EventEmitter();

 //Variables set to switch between edit and non edit modes
  edit = false;
  nonEdit = true;
  status = ['Reasearching','Approved', 'Pending Approval', 'Declined'];
  
  constructor(private router:Router, private companyList: CompaniesService) { }

  ngOnInit() {
   this.userModel = new UserEdit(this.ldata.id,this.ldata.status,this.ldata.description,this.ldata.address1,this.ldata.address2,this.ldata.city,this.ldata.state,this.ldata.zip,this.ldata.DateOfOffer,this.ldata.DateOfClosure,this.ldata.Shares,this.ldata.Price,this.ldata.Stake,this.ldata.StakeAfter,this.ldata.MarketPrice,this.ldata.AcqPremium);

  }
  
  //Function to show and hide form
  ShowEditForm(){
    this.edit=true;
    this.nonEdit = false;
  }
  
  //Function to cancel edit mode
  CancelEdit(){
    this.nonEdit=true;
    this.edit=false;
    console.log(this.ldata);
  }

  //Deleting company from list
  DeleteComp(info:any[]){
    this.childEvent.emit(info);
    this.ldata = []; 
  }

  //Function to pass name of company to archive page through router
  ArchiveComp(info){
    this.router.navigate(['/archive',info.name]);
  }

  changeEvent(event) {
    if (event.target.checked) {
        this.deleteVal= false;
    }
    else {
        this.deleteVal= true;
    }   
}

//Saving form data
SaveForm(){
  console.log(this.userModel);  
  this.companyList.updateInfo(this.userModel)
    .subscribe(company=>{
      this.ldata = this.userModel;
      console.log(this.ldata);
      this.CancelEdit();
    });

}


}
