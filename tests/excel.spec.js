// @ts-check
const { chromium } = require('playwright');
const xlsx = require('xlsx');
const { test, expect } = require('@playwright/test');
const readExcel = (filePath) => {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0]; // Get the first sheet
  const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
  return sheetData;
};
test('has title', async ({ page }) => {
  await page.goto('https://www.orangehrm.com/');
  const filePath = 'data/Book2.xlsx'; // Replace with your file path
  const data = readExcel(filePath);
  const newData = data.map(row => ({ fname: row.fname, mname: row.mname, lname: row.lname.toUpperCase() 
   }));
  console.log('Excel Data:', newData);
});