/**
 * class Clip
 *
 */

var util = require('../lib/util');
var mdb = require('../lib/mongo').db;
var db = mdb.bind('tweet');

var Tweet = {
    save : function(opts, callback){
        var tweet = {
            title : opts.title,
            brief : opts.brief,
            content : opts.content,
            authorUuid : opts.authorUuid,
            authorName : opts.authorName,
            createTime : new Date().getTime(),

            replyNum : 0,
            lastReplyName : '',
            lastReplyUuid : '',
            lastReplyTime : ''
        };

        db.insert(clip, function(err, rs){
            util.handleError(err);
            callback(rs);
        });

    }





    // getOne : function(clip){
    //     return {
            
    //     };

    // }

};

module.exports = Clip;