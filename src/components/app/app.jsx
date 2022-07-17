import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter';
import EmploeysList from '../emploeys-list/emploeys-list';
import EmploeysAddForm from '../emploeys-add-form/emploeys-add-form';
import './app.css'
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
             data: [{name:"John C.",salary:800,increase:true,rise:true,id:1},
                    {name:"Fred X.",salary:2000,increase:false,rise:false,id:2},
                    {name:"Jack K.",salary:5000,increase:false,rise:false,id:3}]
        }
        this.maxId = 4;
    }
    deleteItem = (id) => {
        this.setState(({data})=>{
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    addNewEmploeys = (name, salary) => {
        this.maxId++;
        this.setState(({data})=>{
            return {
                data: data.concat([{name:name,salary:salary, increase:false,rise:false,id:this.maxId}])
            }
        })
    }
    onToggleProp = (id,prop) =>{
        this.setState(({data})=>({
            data: data.map(item => {
             if(item.id === id){
                 return{...item, [prop]: !item[prop]}
             }
             return item;
            }) 
         }))
    }


    render(){
        const emploeys = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo emploeys={emploeys} increased={increased} />
                <div className="search-panel">
                    <SearchPanel/> 
                    <AppFilter/>
                </div>
                <EmploeysList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
                <EmploeysAddForm addNewEmploeys={this.addNewEmploeys}/>
            </div>
        );
    }
}
export default App;