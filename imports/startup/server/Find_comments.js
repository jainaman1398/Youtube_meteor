let key='AIzaSyCR-mEp9VznZULCXYCiK8kaKyDgUImXNLk';
let videoId='UdsaQut9UfQ';

const axios=require('axios');

var url=`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${key}&maxResults=100`;

Meteor.methods({
    "find_comments"(videoId){

    }
})