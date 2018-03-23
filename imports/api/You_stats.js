import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export  const You_stats=new Mongo.Collection('tokens');

Meteor.methods({
    "videos.insert"(q,yo){
        return You_stats.insert({q:q,yo:yo});
    },
    "videos.check"(q){
        return You_stats.findOne({q:q});
    }

});