import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string
    }

    render() {
        //console.log(this.props);
        return (
            <div className="Movie">
                <div className="Movie_Columns">
                    <MoviePoster poster={this.props.poster} alt={this.props.title} />
                </div>
                <div className="Movie_Columns">
                    <h1>{this.props.title}</h1>
                    <div className="Movie_Genres">
                        {this.props.genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                    </div>
                    <LinesEllipsis
                        text={this.props.synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        )
    }
}

class MoviePoster extends Component {

    static propTypes = {
        poster: PropTypes.string.isRequired
    }

    render() {
        //console.log(this.props);
        return <img src={this.props.poster} alt={this.props.alt} title={this.props.title} className="Movie_Poster" />
    }

}

function MovieGenre({genre}) {
    return ( <span className="Movie_Genre">{genre}</span> )
}

export default Movie;