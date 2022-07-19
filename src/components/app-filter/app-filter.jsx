import './app-filter.css'
const AppFilter = (props) =>{
    const buttonsData = [
        {name: 'all', label: "All Employes"},
        {name: 'rise', label: "Up Empl"},
        {name: 'moreThen1000', label: "Sallary more then 1000$"}
    ]
    const buttons = buttonsData.map(({name, label})=>{
        
        const active = props.filter === name;
        const sClass = active ? 'btn-light' : 'btn-outline-light';
        return(
            <button type='button' className={`btn ${sClass}`}
                key={name}
                onClick={()=> props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })   
    return(
        <div className="btn-group">
            {buttons}
        </div>
    );
}
export default AppFilter;