import { DataService } from './services/data.service';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DocumentService } from './services/document.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GedDocumentsComponent } from './ged-documents/ged-documents.component';
import { GedDocumentComponent } from './ged-documents/ged-document/ged-document.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GedDocumentListComponent } from './ged-documents/ged-document-list/ged-document-list.component';
import { GedUserComponent } from './ged-users/ged-user/ged-user.component';
import { ProfileComponent } from './ged-users/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    GedDocumentsComponent,
    GedDocumentComponent,
    GedDocumentListComponent,
    GedUserComponent,
    ProfileComponent
    
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DocumentService,DataService],
  bootstrap: [AppComponent],
  entryComponents: [GedDocumentComponent]
})
export class AppModule { }
