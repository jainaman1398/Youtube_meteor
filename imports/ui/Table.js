import React,{Component} from "react";

export default class Table extends Component{

    constructor(props){
        super(props);

    }


    getdata(data) {
        console.log("map", data);
        data = data.items|| [];

            return data.map((task, key) => {
                console.log(task);
                return (
                    <tr className="alert alert-dark" key={key}>
                        <th>{task.item.snippet.title}</th>
                        <th>{task.item.snippet.publishedAt}</th>
                        <th>{task.stats.statistics.viewCount}</th>
                        <th>{task.stats.statistics.likeCount}</th>
                        <th>{task.stats.statistics.dislikeCount}</th>
                        <th>{task.stats.statistics.favoriteCount}</th>
                        <th>{task.stats.statistics.commentCount}</th>
                    </tr>
                )
            })
        }


    render(){


        return(
            <table className="table table-bordered">
                <tr className="alert alert-success">
                    <th>Title</th>
                    <th>Published_at</th>
                    <th>view_count</th>
                    <th>like_count</th>
                    <th>dislike_count</th>
                    <th>favorite_count</th>
                    <th>Comment_count</th>
                </tr>
                <tbody>
                {this.getdata(this.props.data)}
                </tbody>
            </table>
        )
    }

}
