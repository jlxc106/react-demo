import React, { Component } from 'react';
import _ from 'lodash';

import data from './data.json';
import './App.css';
import Header from './Header';
import Search from './Search';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: '',
      data: []
    };
  }

  componentWillMount() {
    this.setState({ data, sortBy: 'Top Rated' }, ()=>{
      this.sortCallback('Top Rated');
    });
  }

  sortCallback(sortBy) {
    this.setState({ sortBy }, ()=>{
      let orderedData;
      if(sortBy === 'Top Rated'){
        orderedData = _.orderBy(this.state.data, ["averageRating"], ['desc'])
      }else if(sortBy === 'Most Popular'){
        orderedData = _.orderBy(this.state.data, ["views.length"], ['desc'])
      }
      this.setState({data: orderedData});
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search
          numOptions={this.state.data.length}
          sortCallback={this.sortCallback.bind(this)}
          sortOption={this.state.sortBy}
        />
        <Main data={this.state.data}/>
      </div>
    );
  }
}

export default App;
