import { GedDocumentComponent } from './../ged-document/ged-document.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-ged-document-list',
  templateUrl: './ged-document-list.component.html',
  styleUrls: ['./ged-document-list.component.css']
})

export class GedDocumentListComponent implements OnInit {
  
  documents: any[] = [];
  listData : MatTableDataSource<any>;
  displayedColumns: string[] = ['EXTENTION','Upload','ID_NATURE_DOCUMENT','ID_OPERATEUR_CREATION','ID_SOUS_GROUPE_DOCUMENT','DATE_HEURE_AJOUT','REF','actions'];
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: String;

  
 
  constructor(public serviceDocument: DocumentService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.serviceDocument.getall()
    .subscribe(
      (data: any) => {
        console.log(data);
        this.documents = data
        this.listData = new MatTableDataSource(this.documents);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      
      }, error => {
        alert('erreur inattendue')
        console.log(error)
      });
      
  
  }
  onSearchClear() {
    this.searchKey="";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  

  /*onEdit(row){
    this.serviceDocument.update(row)
    .subscribe(
      (data: any) => {
        console.log(data);
        this.documents = data

      
       
      }
      , error => {
        //alert('erreur inattendue')
        alert(JSON.stringify(error))
         console.log(error)
    })
  } */

  onCreate() {
    this.serviceDocument.intializeformGroup();
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(GedDocumentComponent,dialogConfig);
  }
 

  
  
  Edit(row){
    this.serviceDocument.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width= "60%";
    this.dialog.open(GedDocumentComponent,dialogConfig);
  }
  
 
}
