import React, { Component } from 'react';
import '../App.css';
import familia from '../familia.jpg'
import mama from '../mama.jpg'
import samir from '../samir.jpg'
import adrian from '../adrian.jpg'
import adrian2 from '../adrian2.jpg'
import nikkita from '../nikkita.jpg'
import * as Data from '../data'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Familiar from './familiar'

class App extends Component {
  cardData(){
    let data = [ 
      { author: Data.mama().author, photo: Data.mama().photo, preview: Data.mama().preview }, 
      { author: Data.adrian().author, photo: Data.adrian().photo, preview: Data.adrian().preview }, 
      { author: Data.samir().author, photo: Data.samir().photo, preview: Data.samir().preview }, 
      { author: Data.kkitaLove().author, photo: Data.kkitaLove().photo, preview: Data.kkitaLove().preview }, ]
    return data
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link
              to="/"
              className="App-link"
            >
              Feliz Cumpleaños Papa</Link>
          </h1>
        </header>
        <Route exact path="/" render={() => (
          <div className="family-photo-box">
            <img src={familia} className="familia-photo" alt="familia"/>
          </div>
        )}/>
        <Route exact path="/Sokis" render={() => (
          <div className="family-photo-box">
            <img src={mama} className="familia-photo" alt="sokis"/>
          </div>
        )}/>
        <Route exact path="/Adrian" render={() => (
          <div className="family-photo-box">
            <img src={adrian} className="familia-photo" alt="adrian"/>
            <img src={adrian2} className="familia-photo" alt="adrian"/>
          </div>
        )}/>
        <Route exact path="/Samir" render={() => (
          <div className="family-photo-box">
            <img src={samir} className="familia-photo" alt="samir"/>
          </div>
        )}/>
        <Route exact path="/Nikkita" render={() => (
          <div className="family-photo-box">
            <img src={nikkita} className="familia-photo" alt="nikkita"/>
          </div>
        )}/>
        <Route  path="/:name" render={(props) => (
          <Familiar
            name={props.match.params.name}
          />
        )}/>
        <Route exact path="/" render={() => (
          <div>
          <p className="App-intro">
            Hola pa! En este dia te queremos decear el dia mas feliz! 
            Lo queremos muchisimo!!!
          </p>
          <ol className="cards-grid"> 
            {this.cardData().map((card) => (
              <li key={card.author} >
                <div className="cards-box">
                  <h4> 
                    <Link
                      to={{pathname: "/" + card.author}}
                      className="list-card-title-link">
                      {card.author}</Link>
                  </h4>
                </div>
              </li>
            ))}
          </ol>
        </div>
        )}/>
      </div>
    );
  }
}

export default App;
