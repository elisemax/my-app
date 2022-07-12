import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter';
import EmploeysList from '../emploeys-list/emploeys-list';
import EmploeysAddForm from '../emploeys-add-form/emploeys-add-form';
import './app.css'
function App() {
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/> 
                <AppFilter/>
            </div>
            <EmploeysList/>
            <EmploeysAddForm/>
        </div>
    );
}
export default App;