import './emploes-add-form.css'
const EmploeysAddForm = () =>{
    return(
    <div className="app-add-form">
    <h3>New Empl</h3>
    <form
        className="add-form d-flex">
        <input type="text"
            className="form-control new-post-label"
            placeholder="Name" />
        <input type="number"
            className="form-control new-post-label"
            placeholder="Salary $?" />

        <button type="submit"
                className="btn btn-outline-light">Add</button>
    </form>
</div>);
};
export default EmploeysAddForm;