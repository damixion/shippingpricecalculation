import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Zone } from '../models/zone';


@Injectable({
  providedIn: 'root'
})
export class CsvService {

  public userArray: Zone[] = [];
  constructor(private http: HttpClient){
  }

  getZone(): Zone[]
  {
    this.http.get('assets/zones.csv', {responseType: 'text'})
    .subscribe(
        data => {
            const csvToRowArray = data.split('\n');
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              const row = csvToRowArray[index].split(",");
              this.userArray.push(new Zone( row[0], row[1]));
            }
        },
        error => {
            console.log(error);
        }
    );

    return this.userArray;
  }

  importCsv(file: File)
  {
    const data = new FormData();
    data.append('text', file, file.name)
    this.http.post('', data).subscribe( (result) => {console.log('Dziala')});
  }


}

