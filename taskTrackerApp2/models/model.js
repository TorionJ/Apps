var mongoose = require('mongoose');

var getID = require('mongoDB').ObjectID;

var TaskSchema = mongoose.Schema({
    task: {type: String, default: 'NEW TASK'},
    description: {type: String, default: 'None at the moment'},
});

TaskSchema.set('collection', 'taskcollection');

module.exports = mongoose.model('Task', TaskSchema);
// Get Task By ID

module.exports.getTaskByID = function(task, callback) {
    Task.findById(getID(task), callback);
};