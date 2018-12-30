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
  selectedList;
  clicked = false;

  public listData = [];
  dialogResult;
searchText="";
  info;

  constructor(private companyList: CompaniesService, public dialog:MatDialog) { }

  

  ngOnInit() {
    this.companyList.getCompany()
     .subscribe(data => this.listData = data);
  }

  onSelect(ldata): void {
    this.clicked = true;
    this.selectedList = ldata;
  }

 

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

  sendComp(result){
    this.companyList.addComp(result as Companies)
    .subscribe(company => {
      this.listData.push(company);
      console.log(this.listData);
      console.log(company);
    });
  }
  
  recieved(company:Companies){
    this.listData = this.listData.filter(c => c !== company);
    this.companyList.deleteComp(company).subscribe();
  }
}
