import { Component } from 'react';
import './emploes-add-form.css'

class EmploeysAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    onValueChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNewEmploeys(this.state.name, this.state.salary);
        this.setState({
            name:'',
            salary:''
        })
    }
    

    render(){
        const  {name, salary} = this.state
        return(
            <div className="app-add-form">
            <h3>New Empl</h3>
            <form
                className="add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={this.onValueChange} />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Salary $?"
                    name="salary"
                    value={salary}
                    onChange={this.onValueChange} />
        
                <button type="submit"
                        className="btn btn-outline-light">Add</button>
            </form>
        </div>);
    }
};
export default EmploeysAddForm;