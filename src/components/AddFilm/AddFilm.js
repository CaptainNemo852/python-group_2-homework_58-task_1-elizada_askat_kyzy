import React, {  } from 'react';
import './AddFilm.css';


function AddFilm(props) {

    return (
        <div className={"addfilmform"}>
            <form className={'form'}>
                <input
                    type="text"
                    value={props.film.title}
                    onChange={props.onUpdateInput}
                />
            </form>
            <div className={'form'}>
                <button onClick={props.onAddFilm}>
                    Add
                </button>
            </div>
        </div>
    )
}


export default AddFilm