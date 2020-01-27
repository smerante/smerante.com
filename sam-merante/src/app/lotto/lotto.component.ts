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
    console.warn("predicting possible 5 sequences...");
    this.predictNextUniqueNumbers(winningNumbers, 3, 49, 1);
    this.predictNextUniqueNumbers(winningNumbers, 3, 49, 1);
    this.predictOffPreviousWinningNum(winningNumbers, 2, 49, 1);
    this.predictOffPreviousWinningNum(winningNumbers, 2, 49, 1);
    this.predictOffPreviousWinningNum(winningNumbers, 3, 49, 1);
  }


  predictNextUniqueNumbers(winningNumbers: WinningNumbers[], similarities: number, high: number, low: number) {
    let newSequence: number[] = [];

    newSequence = this.generateNewSequence(high, low);

    let previouslyDrawn: boolean = true;

    while (previouslyDrawn) {
      let maxSimilarNumbers: number = 0;

      // WeekI
      for (let weekI = 0; weekI < winningNumbers.length; weekI++) {
        let similarNumbersForRow: number = 0;

        // For each number drawn that week
        for (let numI = 0; numI < winningNumbers[weekI]['winningNumbers'].length; numI++) {

          // Check every generated number
          for (let newGI = 0; newGI < 7; newGI++) {
            let currentNumber = newSequence[newGI];
            if (currentNumber == winningNumbers[weekI][numI]) {
              similarNumbersForRow++;
            }
          }
        }
        maxSimilarNumbers = similarNumbersForRow > maxSimilarNumbers ? similarNumbersForRow : maxSimilarNumbers;
      }

      if (maxSimilarNumbers <= similarities) {
        previouslyDrawn = false;
        newSequence = newSequence.sort()
        console.warn('\t', newSequence, ' + [' + Math.round(Math.random() * 49 + 1) + ']');
      } else {
        newSequence = this.generateNewSequence(high, low);
      }
    }
  }

  predictOffPreviousWinningNum(winningNumbers: WinningNumbers[], simToPrevWeek: number, high: number, low: number) {
    let newSequence = [];

    newSequence = this.generateNewSequence(high, low);

    let previouslyDrawn = true;

    while (previouslyDrawn) {
      let maxSimilarNumbers = 0;
      let maxSimilarNumbersToPrevWeek = 0;
      let lastDrawnWeek = 0;
      let simToLastDrawn = 0;
      // Check numbers for last drawn winning numbers
      for (let numI = 0; numI < 7; numI++) {

        // Check every generated number
        for (let newGI = 0; newGI < 7; newGI++) {
          let currentNumber = newSequence[newGI];
          if (currentNumber == winningNumbers[lastDrawnWeek]['winningNumbers'][numI]) {
            simToLastDrawn++;
          }
        }
      }
      maxSimilarNumbersToPrevWeek = simToLastDrawn > maxSimilarNumbersToPrevWeek ? simToLastDrawn
        : maxSimilarNumbersToPrevWeek;

      if (maxSimilarNumbersToPrevWeek == simToPrevWeek) {

        // WeekI
        for (let weekI = 0; weekI < winningNumbers.length; weekI++) {
          let similarNumbersForRow = 0;

          // For each number drawn that week
          for (let numI = 0; numI < winningNumbers[weekI]['winningNumbers'].length; numI++) {

            // Check every generated number
            for (let newGI = 0; newGI < 7; newGI++) {
              let currentNumber = newSequence[newGI];
              if (currentNumber == winningNumbers[weekI]['winningNumbers'][numI]) {
                similarNumbersForRow++;
              }
            }
          }

          maxSimilarNumbers = similarNumbersForRow > maxSimilarNumbers ? similarNumbersForRow
            : maxSimilarNumbers;
        }
        if (maxSimilarNumbers <= 3) {
          previouslyDrawn = false;
          newSequence = newSequence.sort()
          console.warn('\t', newSequence, ' + [' + Math.round(Math.random() * 49 + 1) + ']');
        } else
          newSequence = this.generateNewSequence(high, low);

      } else
        newSequence = this.generateNewSequence(high, low);

    }

  }

  generateNewSequence(high: number, low: number): number[] {
    let newSequence: number[] = []
    let randomNumber: number[] = [];

    for (let i = 0; i < 7; i++) {
      let randomDigit: number = Math.round(Math.random() * high + low);

      while (randomNumber.includes(randomDigit)) {
        randomDigit = Math.round(Math.random() * high + low);
      }

      randomNumber.push(randomDigit);
      newSequence[i] = randomDigit;
    }

    return newSequence;
  }
}
