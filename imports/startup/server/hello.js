let key='AIzaSyCR-mEp9VznZULCXYCiK8kaKyDgUImXNLk';
import {Meteor} from "meteor/meteor";
import {HTTP} from "meteor/http";

Meteor.methods({

     "hello"(q){
        let url=`https://www.googleapis.com/youtube/v3/search?part=snippet%2Cid&maxResults=50&q=${q}&type=video&key=${key}`;
       let res=HTTP.call("get",url);
       let snippet,statistics,whole_id="";
       snippet=statistics=[];
       whole_id=res.data.items[0].id.videoId;
       for(let i=1;i<(res.data.items.length);i++)
         {
             whole_id=whole_id+","+res.data.items[i].id.videoId;
         }
         console.log(whole_id);
         let hi=`https://www.googleapis.com/youtube/v3/videos?id=${whole_id}&key=${key}%20&part=id,statistics`;
         let res1=HTTP.call("get",hi);
         console.log(res1.data.items);
         Meteor.call("videos.insert",q,res.data.items,res1.data.items,(err,res)=>{
             if(err)
                 throw err;
             else
                 console.log("data stored",res);
         });
         let yo=[];
         yo.push(res.data.items);
         yo.push(res1.data.items);
        return yo;
    }

});