
const ExcelJS = require('exceljs');

async function readExcel() {

    // Create a new workbook
    const workbook = new ExcelJS.Workbook();

    // Read the Excel file
    await workbook.xlsx.readFile('C:\\Playwright2\\Obsqura Testing.xlsx');

    // Access the worksheet
    const worksheet = workbook.getWorksheet('Sheet1');

    // Check whether worksheet exists
    if (!worksheet) {
        throw new Error('Sheet1 worksheet not found');
    }

    // Iterate through each row
    worksheet.eachRow((row, rowNumber) => {

        console.log(`Row ${rowNumber}:`);

        // Iterate through each cell
        row.eachCell((cell, colNumber) => {

            console.log(`Cell ${colNumber}: ${cell.text}`);

        });

    });

}

// Execute the function
readExcel().catch(console.error);
