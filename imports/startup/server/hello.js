let key='AIzaSyCR-mEp9VznZULCXYCiK8kaKyDgUImXNLk';
import {Meteor} from "meteor/meteor";
import {HTTP} from "meteor/http";

Meteor.methods({

     "hello"(q){
        let url=`https://www.googleapis.com/youtube/v3/search?part=snippet%2Cid&maxResults=50&q=${q}&type=video&key=${key}`;
       let res=HTTP.call("get",url);
         Meteor.call("videos.insert",q,res.data.items,(err,res)=>{
             if(err)
                 throw err;
             else
                 console.log("data stored",res);
         })
        return res;
    }

});