import React, { Component } from 'react';
import '../App.css';
import familia from '../familia.jpg'
import mama from '../mama.jpg'
import * as Data from '../data'

class App extends Component {
  cardData(){
    let data = [ 
      { author: Data.mama().author, photo: Data.mama().photo, preview: Data.mama().preview }, 
      { author: Data.adrian().author, photo: Data.adrian().photo, preview: Data.adrian().preview }, 
      { author: Data.kkitaLove().author, photo: Data.kkitaLove().photo, preview: Data.kkitaLove().preview }, 
      { author: Data.samir().author, photo: Data.samir().photo, preview: Data.samir().preview }, ] 
    return data
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feliz Cumpleaños Papa</h1>
        </header>
        <div className="family-photo-box">
          <img src={familia} className="familia-photo"/>
        </div>
        <p className="App-intro">
          Hola pa! En este dia te queremos decear el dia mas feliz! 
          Lo queremos muchisimo!!!
        </p>
        <ol className="cards-grid"> 
          {this.cardData().map((card) => (
            <li key={card.author} >
							<div className="cards-box">
								<div className="list-card-title"> 
									<h3>
                    <div className="list-card-title-link" >
                      {card.preview}
                    </div>
									</h3>
								</div>
								<h4> {card.author} </h4>
							</div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
