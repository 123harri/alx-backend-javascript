// 3-read_file_async.js

const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (error, data) => {
            if (error) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.split('\n').filter(line => line.trim() !== '');
            const header = lines.shift();

            if (lines.length === 0) {
                reject(new Error('Cannot load the database'));
                return;
            }

            console.log(`Number of students: ${lines.length}`);
            const fields = {};

            lines.forEach((line) => {
                const [firstname, lastname, age, field] = line.split(',');

                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstname);
            });

            for (const field in fields) {
                if (fields.hasOwnProperty(field)) {
                    console.log(
                        `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
                    );
                }
            }
            resolve();
        });
    });
}

module.exports = countStudents;
