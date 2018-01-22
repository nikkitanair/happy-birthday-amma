import React, { Component } from 'react';
import * as Data from '../data'


class Familiar extends Component {
  data(){
    let data = {
      "Soquis": Data.mama(),
      "Nikkita": Data.kkitaLove(),
      "Adrian": Data.adrian(),
      "Samir": Data.samir(),
    }
    return data
  }

  render() {
    return (
      <div className="fam-container">
        {this.props.name && (
          <div>
            <div className="fam-body"> {this.data()[this.props.name].message} </div>
            <div className="fam-author">  
              <i> {this.data()[this.props.name].author} </i> 
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Familiar;
