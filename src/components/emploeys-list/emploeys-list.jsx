import EmploeysListItem from "../emploeys-list-item/emploeys-list-item";
import './emploeys-list.css'
const EmploeysList = () => {
    return(
        <ul className="app-list list-group">
            <EmploeysListItem/>
            <EmploeysListItem/>
            <EmploeysListItem/>
        </ul>
    )
}
export default EmploeysList;