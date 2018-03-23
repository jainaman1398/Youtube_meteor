import React,{Component} from "react";

export default class Table extends Component{

    constructor(props){
        super(props);

    }


    getdata(data){
        console.log("map",data);
        data=data.data||[];
        data=data.data||[];

        return data.map((task, key) => {
            // return <li key={key}>{task.id}{task.name}  {task.fan_count}  {task.rating_count}</li>
            return(
                <tr className="alert alert-dark" key={key}>
                    <th>{task.id}</th>
                    <th>{task.name}</th>
                    <th>{task.fan_count}</th>
                    <th>{task.rating_count}</th>
                    <img src={task.picture.data.url} alt="" border="3" height="100" width="100" />
                    <hr/>
                </tr>
            )
        })
    }

    render(){


        return(
            <table className="table table-bordered">
                <tr className="alert alert-success">
                    <th>id</th>
                    <th>Name</th>
                    <th>Fan_count</th>
                    <th>Rating_count</th>
                    <th>LOGO</th>
                </tr>
                {this.getdata(this.props.data)}
            </table>
        )
    }

}
