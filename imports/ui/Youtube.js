import React,{Component} from "react";
let key='AIzaSyCR-mEp9VznZULCXYCiK8kaKyDgUImXNLk';
let videoId='UdsaQut9UfQ';
import Table from "./Table";
const axios=require('axios');

var url=`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${key}&maxResults=100`;


export default class Youtube extends Component{
    constructor(props){
        super(props);
       this.state={
           videoId:"",q:"",items:""
       };
    }

   aj(event)
   {
       this.setState({videoId:event.target.value});
   }

   first(event)
   {
       this.setState({q:event.target.value});
   }

   async click(){

       let url1=`https://www.googleapis.com/youtube/v3/videos?id=${this.state.videoId}&key=${key}%20&part=id,snippet,statistics`;
        await axios.get(url1).then(function (response) {
            console.log(response.data.items[0].snippet);
            console.log(response.data.items[0].statistics);
        }).catch(function (err) {
            console.log(err);
        })
    }

    click1()
    {
       Meteor.call("find_comments",this.state.videoId,(err,res)=>{
           if(err)
               throw err;
           else
               console.log(res);
       })
    }

    click2()
    {
        Meteor.call("videos.check",this.state.q,(err,res)=>{
            if(err)
                throw err;
            else
            {
                if(res===undefined)
                {
                    Meteor.call("hello",this.state.q,(err,res)=>{
                        if(err)
                            throw err;
                        else
                        {
                            console.log(res);
                            this.setState({items:res});
                        }
                    });
                }
                else
                {
                    console.log("data present",res);
                    this.setState({items:res.yo});
                }
            }
        });


    }



    render(){
        return(
            <div>
                <div className="page-header">
                    <h1>Youtube Page API <small>Extract data </small></h1>
                </div>
                <input value={this.state.query_string} placeholder="Id_Search" onChange={this.aj.bind(this)}/>
                <button className="btn btn-success" onClick={this.click.bind(this)}>Search Statistics</button>
                <button className="btn btn-danger" onClick={this.click1.bind(this)}>Get all Comments</button><hr/>
                <input value={this.state.q} placeholder="query_Search" onChange={this.first.bind(this)}/>
                <button className="btn btn-info" onClick={this.click2.bind(this)}>Get related videos</button><hr/>
                <Table  data={{items:this.state.items}} />
            </div>
        )
    }
}