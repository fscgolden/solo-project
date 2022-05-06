const db = require('../models/patientsModels');
const patientsController = {};

patientsController.getPatients = (req, res, next) => {
  const query = 'SELECT * FROM patients';

  db.query(query)
    .then((data) => {
      res.locals = data.rows;
      return next();
    })
    .catch(error => next({
      log: 'patientsController.getPatients ERROR',
      message: {err: 'patientsController.getPatients ERROR'}
    }));
};


patientsController.createPatient = (req, res, next) => {
  const { name, identifier, date, procedure, notes, biopsy, discussed } = req.body;
  const dataArr = [name, identifier, date, procedure, notes, biopsy, discussed]
  const query = 'INSERT INTO patients (name, identifier, date, procedure, notes, biopsy, discussed) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';

  db.query(query, dataArr)
    .then((data) => {
      res.locals = data.rows[0];
      console.log('in then statement')
      console.log('data.rows[0] is: ', data.rows[0]);
      return next();
    })
    .catch(error => next({
      log: 'patientsController.createPatient ERROR',
      message: {err: 'patientsController.createPatient ERROR'}
    }));
};

patientsController.updatePatient = (req, res, next) => {
  const { name, identifier, date, procedure, notes, biopsy, discussed } = req.body;
  const dataArr = [name, identifier, date, procedure, notes, biopsy, discussed]
  const query = 'UPDATE patients SET date = $3, procedure = $4, notes = $5, biopsy = $6, discussed = $7 WHERE name = $1 AND identifier = $2 RETURNING *';

  db.query(query, dataArr)
    .then((data) => {
      res.locals = data.rows[0];
      // console.log('data is: ', JSON.stringify(data));
      console.log('GOT HERE IN AFTER UDPATING DB')
      return next();
    })
    .catch(error => next({
      log: 'patientsController.updatePatient ERROR',
      message: {err: 'patientsController.updatePatient ERROR'}
    }));
};

patientsController.deletePatient = (req, res, next) => {
  const { name, identifier, date, procedure, notes, biopsy, discussed } = req.body;
  const dataArr = [name, identifier, date, procedure, notes, biopsy, discussed]
  const query = 'DELETE FROM patients WHERE name = $1 AND identifier = $2 AND date = $3 AND procedure = $4 AND notes = $5 AND biopsy = $6 AND discussed = $7 RETURNING *';

  db.query(query, dataArr)
    .then((data) => {
      res.locals = data.rows[0];
      return next();
    })
    .catch(error => next({
      log: 'patientsController.deletePatient ERROR',
      message: {err: 'patientsController.deletePatient ERROR'}
    }));
};

module.exports = patientsController;