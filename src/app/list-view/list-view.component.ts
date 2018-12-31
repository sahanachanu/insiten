/* Importing all necessary components*/ 
import { Component, OnInit} from '@angular/core';
import { CompaniesService } from '../companies.service';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { Companies } from '../companies';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  //Declaring variables and arrays 
  selectedList;
  clicked = false;

  //Declaring empty list array to manage CRUD operations
  public listData = [];

  //Array declared to fetch result from modal box
  dialogResult ;

  //Variable that holds the text to search the list
  searchText="";

  constructor(private companyList: CompaniesService, public dialog:MatDialog) { }

  

  ngOnInit() {
    //Getting data from the json file 
    this.companyList.getCompany()
     .subscribe(data => this.listData = data);
  }


  onSelect(ldata): void {
    this.clicked = true;
    this.selectedList = ldata;
  }

 
//Function to open the dialog or modal box for creating a new list item
  openDialog(){
    let dialogRef = this.dialog.open(MyDialogComponent, {
      width:'600px',
      data:"this is text passed to dialog"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: $(result)`);
      this.dialogResult = result;
      this.sendComp(this.dialogResult);
    })
  }

  //Function to add a new company to the list
  sendComp(result){
    this.companyList.addComp(result as Companies)
    .subscribe(company => {
      this.listData.push(company);
    });
  }
  
  //Function to remove a list item
  recieved(company:Companies){
    this.listData = this.listData.filter(c => c !== company);
    this.companyList.deleteComp(company).subscribe();
  }
}
