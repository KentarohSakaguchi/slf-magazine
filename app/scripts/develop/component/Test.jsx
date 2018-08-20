import React, {Component} from 'react'
import axios from 'axios';

const json = '../../record/test.json';

class Tset extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'あんず!!'
    };
  }

  test() {

    axios
      .get(json)
      .then((results) => {
          console.log(results);
          this.setState({
            text: results.data.name,
          });
        }
      ).catch((results) => {
        console.log(results);
      });
  }

  render() {
    return(<button className="button" onClick={this.test.bind(this)}>{this.state.text}</button>);
  }

}

export default Tset;
