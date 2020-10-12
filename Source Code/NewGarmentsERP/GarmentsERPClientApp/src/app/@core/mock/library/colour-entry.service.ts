import { Injectable } from '@angular/core';
import { ColourEntry } from '../../data/Library-Modul-model/colour-entry';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColourEntryService {

  public list:ColourEntry[];
  colourEntry:ColourEntry; 
  constructor(public http:HttpClient) { }
  getColourEntry():Observable<ColourEntry[]>{
    return this.http.get<ColourEntry[]>(BaseURL.apiUrl+'/ColourEntries');
  } 
 async getClrEntry(){
 
     let list= await this.http.get<ColourEntry[]>(BaseURL.apiUrl+'/ColourEntries').toPromise().then(data=>{
       this.list=data;
     });
     return list;
  } 
  async getConditionalDataUsingAsync() {
    let data = await this.http.get<ColourEntry[]>(BaseURL.apiUrl+'/ColourEntries').toPromise();
   
    console.log(data);
  }


  refreshList(){
  this.http.get(BaseURL.apiUrl+'/ColourEntries')
   // .subscribe(res=>this.list=res as  ColourEntry[]  );
    .toPromise().then(res=>this.list = res as ColourEntry[]  )
    console.log(this.list);
     var list1
    this.getColourEntry().subscribe(data=>{
       list1=data;
    })
    console.log(list1);
  }

  addColourEntry(colourEntry:ColourEntry){
    return this.http.post<ColourEntry>(BaseURL.apiUrl+'/ColourEntries',colourEntry);
  }
  updateColourEntry(colourEntry:ColourEntry){
    return this.http.put(BaseURL.apiUrl+'/ColourEntries/'+colourEntry.id,colourEntry);
  }
  deleteColourEntry(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ColourEntries/'+id);
  }
}
