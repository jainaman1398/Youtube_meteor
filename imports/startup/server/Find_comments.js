let key='AIzaSyCR-mEp9VznZULCXYCiK8kaKyDgUImXNLk';
let videoId='UdsaQut9UfQ';

const axios=require('axios');


Meteor.methods({
   async "find_comments"(videoId){
       let ar=[]
        let url=`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${key}&maxResults=100`;
        while (url) {
            await axios.get(url).then(function (response) {
                let v = response.data.items;
                v.forEach(function (item) {
                    let yo = item.snippet.topLevelComment.snippet;
                   ar.push({Name:yo.authorDisplayName,text:yo.textDisplay,like:yo.likeCount})
             //       writer.write([yo.authorDisplayName, yo.textDisplay, yo.likeCount]);
                    if (item.snippet.totalReplyCount > 0) {
                        let aj = item.replies.comments;

                        aj.forEach(function (item) {
                            let yo = item.snippet;
                          //  writer.write([yo.authorDisplayName, yo.textDisplay, yo.likeCount]);
                            ar.push({Name:yo.authorDisplayName,text:yo.textDisplay,like:yo.likeCount});
                        })
                    }
                })
                console.log(response.data.nextPageToken);
                if (response.data.nextPageToken) {
                    console.log("hi");
                    url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&pageToken=${response.data.nextPageToken}&key=${key}&maxResults=100`

                }
                else {
                    url=undefined;
                    console.log(ar.length);
                 //   console.log(ar);
                 //   return ar;
                }

            }).catch(function (err) {
                console.log(err);
            })
        }
        return ar;
    }
})