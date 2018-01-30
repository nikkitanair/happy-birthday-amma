import React, { Component } from 'react';
import '../App.css';
import familia from '../photos/familia_acha.jpg'
import familia1 from '../photos/familia_acha1.jpg'
import familia2 from '../photos/familia_acha2.jpg'
import familia3 from '../photos/familia_acha3.jpg'
import familia4 from '../photos/familia_acha4.jpg'
import familia5 from '../photos/familia_acha5.jpg'
import familia6 from '../photos/familia_acha6.jpg'
import familia7 from '../photos/familia_acha7.jpg'
import familia8 from '../photos/familia_acha8.jpg'
import familia9 from '../photos/familia_acha9.jpg'
import familia10 from '../photos/familia_acha10.jpg'
import familia11 from '../photos/familia_acha11.jpg'
import familia12 from '../photos/familia_acha12.jpg'
import familia13 from '../photos/familia_acha13.jpg'
import familia14 from '../photos/familia_acha14.jpg'
import familia15 from '../photos/familia_acha15.jpg'
import familia16 from '../photos/familia_acha16.jpg'
import familia17 from '../photos/familia_acha17.jpg'
import familia18 from '../photos/familia_acha18.jpg'
import familia20 from '../photos/familia_acha20.jpg'
import familia21 from '../photos/familia_acha21.jpg'
import familia22 from '../photos/familia_acha22.jpg'
import familia23 from '../photos/familia_acha23.jpg'
import familia24 from '../photos/familia_acha24.jpg'
import familia25 from '../photos/familia_acha25.jpg'
import familia26 from '../photos/familia_acha26.jpg'
import familia27 from '../photos/familia_acha27.jpg'
import familia28 from '../photos/familia_acha28.jpg'
import familia29 from '../photos/familia_acha29.jpg'
import familia41 from '../photos/famila_acha41.jpg'
import familia42 from '../photos/famila_acha42.jpg'
import familia43 from '../photos/famila_acha43.jpg'
import familia44 from '../photos/famila_acha44.jpg'
import familia45 from '../photos/famila_acha45.jpg'
import familia46 from '../photos/famila_acha46.jpg'
import familia47 from '../photos/famila_acha47.jpg'
import familia48 from '../photos/famila_acha48.jpg'
import familia49 from '../photos/famila_acha49.jpg'
import familia50 from '../photos/famila_acha50.jpg'
import familia51 from '../photos/famila_acha51.jpg'
import familia52 from '../photos/famila_acha52.jpg'
import familia53 from '../photos/famila_acha53.jpg'




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
      { author: Data.kkitaLove().author, photo: Data.kkitaLove().photo, preview: Data.kkitaLove().preview }, 
      { author: Data.samir().author, photo: Data.samir().photo, preview: Data.samir().preview }, 
    ]
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
              HAPPY BIRTHDAY ACHA!</Link>
          </h1>
          <Route exact path="/" render={() => (
            <div >
              <img src={familia41} className="familia-photo-acha" alt="familia"/>
            </div>
          )}/>
        </header>
        <Route exact path="/" render={() => (
            <div className="family-photo-box">
              <img src={familia6} className="familia-photo" alt="familia"/>
              <img src={familia7} className="familia-photo" alt="familia"/>
              <img src={familia10} className="familia-photo" alt="familia"/>
              <img src={familia11} className="familia-photo" alt="familia"/>
              <img src={familia12} className="familia-photo" alt="familia"/>
              <img src={familia13} className="familia-photo" alt="familia"/>
              <img src={familia14} className="familia-photo" alt="familia"/>
              <img src={familia15} className="familia-photo" alt="familia"/>
              <img src={familia16} className="familia-photo" alt="familia"/>
              <img src={familia23} className="familia-photo" alt="familia"/>
              <img src={familia1} className="familia-photo" alt="familia"/>
              <img src={familia5} className="familia-photo" alt="familia"/>
              <img src={familia29} className="familia-photo" alt="familia"/>
              <img src={familia4} className="familia-photo" alt="familia"/>
              <img src={familia2} className="familia-photo" alt="familia"/>
              <img src={familia3} className="familia-photo" alt="familia"/>
              <img src={familia24} className="familia-photo" alt="familia"/>
              <img src={familia27} className="familia-photo" alt="familia"/>
              <img src={familia28} className="familia-photo" alt="familia"/>
              <img src={familia42} className="familia-photo" alt="familia"/>
              <img src={familia43} className="familia-photo" alt="familia"/>
              <img src={familia44} className="familia-photo" alt="familia"/>
              <img src={familia45} className="familia-photo" alt="familia"/>
              <img src={familia46} className="familia-photo" alt="familia"/>
              <img src={familia47} className="familia-photo" alt="familia"/>
              <img src={familia48} className="familia-photo" alt="familia"/>
              <img src={familia51} className="familia-photo" alt="familia"/>
            </div>
        )}/>
        <Route exact path="/Samir" render={() => (
          <div className="family-photo-box">
            <img src={familia26} className="familia-photo" alt="familia"/>
            <img src={familia49} className="familia-photo" alt="familia"/>
          </div>
        )}/>
        <Route exact path="/Nikki" render={() => (
          <div className="family-photo-box">
            <img src={familia} className="familia-photo" alt="familia"/>
            <img src={familia52} className="familia-photo" alt="familia"/>
            <img src={familia53} className="familia-photo" alt="familia"/>
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
            Hi Acha! We would like to wish you the happiest birthday ever!
          </p>
          <ol className="cards-grid"> 
            {this.cardData().map((card) => (
              <li key={card.author} >
                <div className="cards-box">
                  <h3> 
                    <Link
                      to={{pathname: "/" + card.author}}
                      className="list-card-title-link">
                      {card.author}</Link>
                  </h3>
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
