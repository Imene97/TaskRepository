import { Component } from "react";

class SubmitTask extends Component{
    constructor(props){
        super(props);
        this.state= {
            image:''
        }
    }
    onChange(e){
let files = e.target.files;
console.warn("data file",files)
let reader = new FileReader;
reader.readAsDataURL(files[0]);
    }

    render(){
        return(
            <div onSubmit={this.onFormSubmit}>
                <input type="file" name="file" onChange={(e)=>this.onChange(e)} />
            </div>
        )

    }
}

export default SubmitTask;