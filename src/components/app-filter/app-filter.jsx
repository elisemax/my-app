import './app-filter.css'
const AppFilter = () =>{
    return(
        <div className="btn-group">
            <button className="btn btn-light" type="button">
                All Empl
            </button>
            <button className="btn btn-outline-light" type="button">
                Up Empl
            </button>
            <button className="btn btn-outline-light" type="button">
                Sallary more then 1000$
            </button>
        </div>
    );
}
export default AppFilter;