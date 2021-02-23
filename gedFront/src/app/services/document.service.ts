import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private dataService: DataService) { }
   

  form: FormGroup = new FormGroup({
    ID_DOCUMENT: new FormControl(null),
    EXTENTION: new FormControl(''),
    Upload: new FormControl(''),
    ID_NATURE_DOCUMENT: new FormControl(0),
    ID_OPERATEUR_CREATION: new FormControl(0),
    ID_SOUS_GROUPE_DOCUMENT: new FormControl(0),
    DATE_HEURE_AJOUT: new FormControl(''),
    REF: new FormControl('') 
  });

  intializeformGroup() {
    this.form.setValue({
      ID_DOCUMENT: null,
      EXTENTION:'' ,
      Upload:'' ,
      ID_NATURE_DOCUMENT:0 ,
      ID_OPERATEUR_CREATION:0 ,
      ID_SOUS_GROUPE_DOCUMENT:0 ,
      DATE_HEURE_AJOUT:'' ,
      REF: ''
    });
  }

  getall() {
    const path = 'Document/all';
    return this.dataService.getAll(path);  }

  create(models = {}) {
    const path = 'Document/new';
    console.log('****',path)
    return this.dataService.post(path, models);
    }
 
  update(entity = [], query = {}) {
      const path = 'Document/edit' + Object.keys(query).map(key => key + '=' + query[key]).join('&'); 
      console.log('****',path,entity)
      return this.dataService.update(path, entity);
      
      }  

  populateForm(document) {
      this.form.setValue(document);
      }

       
      
 

}
