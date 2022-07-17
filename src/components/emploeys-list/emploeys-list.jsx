import EmploeysListItem from "../emploeys-list-item/emploeys-list-item";
import './emploeys-list.css'
const EmploeysList = ({data}) => {
    const elements = data.map(item =>{
        return(
            <EmploeysListItem {...item}/>
        )
    });
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default EmploeysList;