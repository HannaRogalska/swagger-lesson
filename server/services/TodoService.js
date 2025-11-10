/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Return all todos
*
* returns List
* */
const todosGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Return one todo
*
* id String id to fetch
* returns Todo
* */
const todosIdGET = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create new todo
*
* todosPostRequest TodosPostRequest 
* no response value expected for this operation
* */
const todosPOST = ({ todosPostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        todosPostRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  todosGET,
  todosIdGET,
  todosPOST,
};
