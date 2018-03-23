import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export  const You_stats=new Mongo.Collection('tokens');

Meteor.methods({
    "videos.insert"(q,items){
        return You_stats.insert({q:q,items:items});
    },
    "videos.check"(q){
        return You_stats.findOne({q:q});
    }

});