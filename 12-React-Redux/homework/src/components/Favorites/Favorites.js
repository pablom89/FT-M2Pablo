import React, { Component } from "react";
import { removeMovieFavorite } from "../../actions";
import { connect } from "react-redux";
//import { removeArticle } from "../../actions/index";
import { Link } from 'react-router-dom';
import "./Favorites.css";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.fv.map((el) => {
            return (
              <li key={el.id}>
                <Link to={`/movie/${el.id}`}>
                {el.Title}
                </Link> 
                <br />
                <div style={{ marginBottom: "1rem" }}>
                  <img src={el.Poster} alt="image not found" />
                  <br />
                  <button onClick={() => this.props.removeMovieFavorite(el.Title)}>
                    Eliminar Pelicula
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fv: state.movies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: (movie) => dispatch(removeMovieFavorite(movie)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
