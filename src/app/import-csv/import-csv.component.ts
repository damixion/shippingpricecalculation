import { Component, OnInit, ViewChild } from '@angular/core';
import { CsvService } from '../services/csv.service';


@Component({
  selector: 'app-import-csv',
  templateUrl: './import-csv.component.html',
  styleUrls: ['./import-csv.component.css']
})
export class ImportCsvComponent implements OnInit {

  selectedFile: File = null;

  constructor(private servicecsv: CsvService) { }

  ngOnInit(): void {
  }


  onFileSelect(event)
  {
   this.selectedFile = <File>event.target.files[0];
  }

  onUpload()
  {
    this.servicecsv.importCsv(this.selectedFile);
    this.selectedFile = null;
  }


}
