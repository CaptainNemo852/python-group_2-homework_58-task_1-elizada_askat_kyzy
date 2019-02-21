import React, {Component} from 'react';
import './FilmForm.css';


class FilmForm extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.title !== this.props.title
    }

    render() {
        return (
            <div className={"Films"}>
                <div className={'film_change'}>
                    <input type="text" title="title" value={this.props.title} onChange={this.props.onChangeFilm}/>

                </div>
                <div className={'forms'}>

                    <div className={'delete-button'}>
                        <button onClick={this.props.onDeleteFilm}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default FilmForm