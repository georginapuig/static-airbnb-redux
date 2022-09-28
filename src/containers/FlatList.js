import React, { Component } from 'react'
import Flat from '../components/Flat';

export default class FlatList extends Component {
  static defaultProps = {
    flats: [{
      "name": "Charm at the Steps of Montmartre",
      "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
      "price": 164,
      "priceCurrency": "EUR"
    }]
  }

  render() {
    return (
      <div className="col-sm-7 flat-list">
        {this.props.flats.map(flat => <Flat flat={flat} key={flat.name} />)}
      </div>
    )
  }
}
