import EmploeysListItem from "../emploeys-list-item/emploeys-list-item";
import './emploeys-list.css'
const EmploeysList = ({data, onDelete, onToggleProp}) => {
    const elements = data.map(item =>{
        const {id,...itemProps} = item; 
        return(
            <EmploeysListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e)=> onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    });
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default EmploeysList;