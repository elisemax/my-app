import EmploeysListItem from "../emploeys-list-item/emploeys-list-item";
import './emploeys-list.css'
const EmploeysList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {
    const elements = data.map(item =>{
        const {id,...itemProps} = item; 
        return(
            <EmploeysListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease={()=> onToggleIncrease(id)}
            onToggleRise={()=> onToggleRise(id)}/>
        )
    });
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default EmploeysList;