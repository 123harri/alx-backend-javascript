// full_server/utils.js
import fs from 'fs';
import path from 'path';

/**
 * Reads the database file and returns a promise.
 * @param {string} filePath - Path to the CSV file.
 * @returns {Promise<Object>} - Promise resolving to an object of arrays of first names per field.
 */
export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').slice(1);
      const result = {};

      lines.forEach(line => {
        const [firstname, , , field] = line.split(',');
        if (firstname && field) {
          if (!result[field]) {
            result[field] = [];
          }
          result[field].push(firstname);
        }
      });

      resolve(result);
    });
  });
}
