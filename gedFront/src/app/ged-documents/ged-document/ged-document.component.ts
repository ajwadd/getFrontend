import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ged-document',
  templateUrl: './ged-document.component.html',
  styleUrls: ['./ged-document.component.css']
})
export class GedDocumentComponent implements OnInit {

  documents: any[] = [];
 /* document  = {
    ID_DOCUMENT: 0,
    EXTENTION: '',
    Upload: '',
    ID_NATURE_DOCUMENT: '0',
    ID_OPERATEUR_CREATION: '0',
    ID_SOUS_GROUPE_DOCUMENT: '0',
    DATE_HEURE_AJOUT: '',
    REF: ''

  }; */

  constructor(public serviceDocument: DocumentService,
    public dialogRef: MatDialogRef<GedDocumentComponent>) { }

  ngOnInit() {
    this.serviceDocument.getall();
  }

  onClear(){
    this.serviceDocument.form.reset();
    this.serviceDocument.intializeformGroup();
  }

 
  onSubmit(){
    //console.log('abdelhafid',this.serviceDocument.form.valid)
    if (this.serviceDocument.form.valid) {
      //console.log(this.serviceDocument.form.get('ID_DOCUMENT').value)
      if (!this.serviceDocument.form.get('ID_DOCUMENT').value) {
        console.log('-------------- CREATE -----------');
        console.log(this.serviceDocument.form.value);
          this.serviceDocument.create(this.serviceDocument.form.value)
          .subscribe((data: any) => console.log(data)
          ,(err: any) => console.log(err))
      } else {
        console.log('-------------- UPDATE -----------');
        console.log(this.serviceDocument.form.value);
        this.serviceDocument.update(this.serviceDocument.form.value)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.documents = data
          this.serviceDocument.form.reset();
          this.serviceDocument.intializeformGroup();
          this.onClose();
        }
        , error => {
        //alert('erreur inattendue')
        console.log('my',error)
      })
     }
    } else {
      console.log('formule non valide')
    }

  } 
  

 


  onClose() {
    this.serviceDocument.form.reset();
    this.serviceDocument.intializeformGroup();
    this.dialogRef.close();
  }

}
