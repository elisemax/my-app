import EmploeysListItem from "../emploeys-list-item/emploeys-list-item";
import './emploeys-list.css'
const EmploeysList = () => {
    return(
        <ul className="app-list list-group">
            <EmploeysListItem name='John C' salary={800}/>
            <EmploeysListItem name='Alex M' salary={3000}/>
            <EmploeysListItem name='Carl W' salary={5000}/>
        </ul>
    )
}
export default EmploeysList;