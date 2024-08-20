// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils.js';

/**
 * Controller for handling student-related requests.
 */
export default class StudentsController {
  /**
   * Handles request to get all students.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static async getAllStudents(req, res) {
    const filePath = req.app.get('db'); // Get the database path from app settings

    try {
      const data = await readDatabase(filePath);
      const fields = Object.keys(data).sort((a, b) => a.localeCompare(b));
      let response = 'This is the list of our students\n';

      fields.forEach(field => {
        response += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
      });

      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  /**
   * Handles request to get students by major.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static async getAllStudentsByMajor(req, res) {
    const filePath = req.app.get('db'); // Get the database path from app settings
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase(filePath);
      const list = data[major] || [];
      res.status(200).send(`List: ${list.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

