import React, {Component, Fragment} from 'react';
import './Film.css';
import AddFilm from '../../components/AddFilm/AddFilm';
import FilmForm from "../../components/FilmForm/FilmForm";


class Movie extends Component {
    state = {
        films: [
            {id: 1, title: 'Детектив Пикачу'},
            {id: 2, title: 'Король лев'},
            {id: 3, title: 'Снегоуборщик'},
            {id: 4, title: 'Мстители'},

        ],
        currentFilm: {title: ''}
    };


      updateFilm = (id, event) => {
        let value = event.target.value;
        let filmsId = this.state.films.findIndex(film => {
            return film.id === id;
        });
        let addFilm = {
            id: id,
            title: value
        };
        let films = [...this.state.films];
        films.splice(filmsId, 1, addFilm);

        this.setState({
            ...this.state,
            films,
            currentFilm: {title: ''}
        });
    };


    deleteFilm = (id, event) => {
        event.preventDefault();
        let filmsId = this.state.films.findIndex(film => {
            return film.id === id;
        });

        const films = [...this.state.films];
        films.splice(filmsId, 1);

        this.setState({
            ...this.state,
            films,
            currentFilm: {title: ''}
        });
    };


    addFilmForm = (event) => {
        event.preventDefault();
        let film = event.target.value;
        let currentFilm = {
            ...this.state.currentFilm,
            title: film
        };
        this.setState({
            ...this.state,
            currentFilm
        });
    };

    addFilm = (event) => {
        event.preventDefault();
        let film = {...this.state.currentFilm};
        let films = [...this.state.films, film];
        this.setState({
            ...this.state,
            films,
            currentFilm: {title: ''}
        });
    };




    render() {
        return (
            <Fragment>
                <AddFilm
                    film={this.state.currentFilm}
                    onUpdateInput={(event) => this.addFilmForm(event)}
                    onAddFilm={(event) => this.addFilm(event)}
                />
                {this.state.films.map((film) => {
                    return <div key={film.id}>
                        <FilmForm
                            title={film.title}

                            onUpdateFilm={(event) => this.updateFilm(film.id, event)}
                            onDeleteFilm={(event) => this.deleteFilm(film.id, event)}>

                        </FilmForm>
                    </div>
                })}
            </Fragment>
        )

    }
}

export default Movie;
