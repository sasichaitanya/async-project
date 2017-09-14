var async= require('async');


var studentColl= require('../models/sample.js');


function getSeries(callback){
    var retObj = {};
    async.series({
        students: function(cb1){
            studentColl.find({},function(err,studentDocs){
                cb1(null, studentDocs)
            });
        },
        teachers: function(cb2){
            studentColl.find({},function(err,teacherDocs){
                cb2(null,teacherDocs)
            });
        }
    },
    function(err, results) {
        if(err) {
            retObj.status = false;
            retObj.message = 'Error';
            callback(retObj);
        } else {
            retObj.message = 'Success';
            retObj.output = results.students.concat(results.teachers);
            retObj.status = true;
            callback(retObj);
        }
    });
}

module.exports = getSeries;