const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbFilePath = path.join(__dirname, 'hymns.db');
const db = new sqlite3.Database(dbFilePath);

const tableName = 'hymns';
const query = `SELECT * FROM ${tableName} LIMIT 801`;

db.all(query, (err, rows) => {
    if (err) {
        console.error('Error executing query:', err.message);
    } else {
        if (rows.length === 0) {
            console.log('No rows found.');
        } else {
            // Save the first 50 rows to a JSON file called 'storage.json'
            const resultFilePath = path.join(__dirname, 'hymns.json');
            const resultArray = rows.map(row => Object.assign({}, row)); // Create a copy of each row

            fs.writeFile(resultFilePath, JSON.stringify(resultArray, null, 2), (writeErr) => {
                if (writeErr) {
                    console.error('Error writing to JSON file:', writeErr.message);
                } else {
                    console.log(`First 50 rows saved to ${resultFilePath}`);
                }
            });
        }
    }

    db.close((error) => {
        if (error) {
            console.error('Error closing database connection:', error.message);
        } else {
            console.log('Database connection closed.');
        }
    });
});
