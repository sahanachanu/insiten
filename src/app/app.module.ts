import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { FooterComponent } from './footer/footer.component';
import { GrdFilterPipe } from './filter.pipe';
import { ContactsService } from './contacts.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';
import { ArchiveComponent } from './archive/archive.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const appRoutes:Routes = [
  { path: 'list', component: ListViewComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'archive/:name', component: ArchiveComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListViewComponent,
    ListDetailsComponent,
    FooterComponent,
    StatisticsComponent,
    GrdFilterPipe,
    MessagesComponent,
    ContactsComponent,
    MyDialogComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    NoopAnimationsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    
 
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],

  exports: [ RouterModule ],

  entryComponents: [
    MyDialogComponent
  ],

  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const routingComponents = [StatisticsComponent, ArchiveComponent];