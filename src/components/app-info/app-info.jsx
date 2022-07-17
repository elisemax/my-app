import './app-info.css';

const AppInfo = ({increased,emploeys}) => {
    
    
    return (
        <div className="app-info">
            <h1>Emploeys in company N</h1>
            <h2>All Emploeys in company: {emploeys}</h2>
            <h2>Bonus take: {increased}</h2>
        </div>
    )
}
export default AppInfo;