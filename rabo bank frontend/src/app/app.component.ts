import { Component } from '@angular/core';
import { Records } from './records';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  uploadFiles: any;
  records: Records[] = [];
  filterValue = "";

  submitFile(){
    if (this.uploadFiles && this.uploadFiles.length) {

       const fileToRead = this.uploadFiles[0];
       const fileReader = new FileReader();
       fileReader.onload = this.onFileLoad;

       fileReader.readAsText(fileToRead, "UTF-8");
   }
  }

 

  onFileLoad = (fileLoadedEvent) => {
    let textContent = fileLoadedEvent.target.result;              
    this.records = [];
    var rows = textContent.split("\n");
    rows.forEach(row => {
      if(rows.indexOf(row) == 0) return;
      let record = new Records();
      let columns = row.split(",");
      record.firstName = columns[0] ? columns[0].replace(/\"/g,"") : "";
      record.surName = columns[1] ? columns[1].replace(/\"/g,"") : "";
      record.issueCount = columns[2] ? columns[2].replace(/\"/g,"") : "";
      record.dob = columns[3] ? columns[3].replace(/\"/g,"") : "";
      this.records.push(record);
    });
}

  onFileChange(event){
    this.uploadFiles = event.target.files;
  }

  
}
