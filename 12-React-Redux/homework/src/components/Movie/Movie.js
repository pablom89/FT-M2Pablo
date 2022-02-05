import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail, clearMovie } from '../../actions/index';
import './Movie.css';

class Movie extends React.Component {
    
    componentDidMount(){
        const {match: { params: {id}}} = this.props;
        this.props.getMovieDetail(id);
    }

    componentWillUnmount(){
        this.props.clearMovie();
    }

    render() {
        if(this.props.movie.Title){
        const a = this.props.movie.Actors;
        let count = 0;
        const ac = a.split(",").map(el => <li key={count++}>{el}</li>);
        return (
                <div className="movie-detail" style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem"}}>
                <div>
                <h1>{this.props.movie.Title} | {this.props.movie.Rated}</h1> 
                <img src={this.props.movie.Poster} alt="image not found" />
                </div>
                <div style={{marginLeft: "3rem"}}> 
                <h2>Actors:</h2>
                <ul>
                    {ac}
                </ul>
                </div>
            </div>
        );
     }
     return <h1>Cargando...</h1>
    }
}

function mapStateToProps(state){
    return {
        movie : state.movieDetail
    }
}

function mapDispatchToProps(dispatch){
    return{
        getMovieDetail: id => dispatch(getMovieDetail(id)),
        clearMovie: () => dispatch(clearMovie())
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Movie);