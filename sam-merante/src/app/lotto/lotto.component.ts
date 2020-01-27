import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

interface WinningNumbers {
  winningNumbers: any[];
}
@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.scss']
})
export class LottoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  arrayBuffer: any;
  file: File;

  incomingfile(event) {
    this.file = event.target.files[0];
  }

  upload() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      const winningNumbers = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      this.predictNumbers(winningNumbers);

    }
    fileReader.readAsArrayBuffer(this.file);
  }

  predictNumbers(file: any[]) {
    let winningRows = [];
    file.forEach((row) => {
      winningRows.push(row.winningNumbers);
    });
    let winningNumbers: WinningNumbers[] = [];

    winningRows.forEach(row => {
      winningNumbers.push({ winningNumbers: row.split(' ') });
    });

    for (let i = 0; i < winningNumbers.length; i++) {
      for (let j = 0; j < 7; j++) {
        winningNumbers[i].winningNumbers[j] = parseInt(winningNumbers[i].winningNumbers[j], 10);
      }
    }
    console.warn(winningNumbers);
  }

  // for (int i = 1; i < rows; i++) {
  // 	XSSFRow row = myExcelSheet.getRow(i);
  // 	ArrayList<String> data = stripNonDigits(row.getCell(2).getStringCellValue());
  // 	for (int j = 0; j < data.size(); j++) {
  // 		try {
  // 			winningNumbers[i - 1][j] = Integer.parseInt(data.get(j));
  // 		} catch (Exception e) {
  // 			System.out.println(e);
  // 			System.out.println(
  // 					"week " + (i + 1) + ", seq: " + data + " returned an error: \"" + data.get(j) + "\"");
  // 		}
  // 	}
  // }

}
