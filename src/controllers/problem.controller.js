const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error.');
const BadRequest = require('../errors/badrequest.error');

function pingProblemController(req, res) {
    return res.json({ message: 'Ping controller is up' });
}

function addProblem(req, res, next) {
    try {
        throw new BadRequest('Problem Name', {missing: ["Problem Name"]});
    }catch (error) {
        next(error);
    }
}

function getProblem(req, res, next) {
}

function getProblems(req, res) {
}

function deleteProblem(req, res) {
}

function updateProblem(req, res) {
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
};
