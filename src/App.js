import React, {Component} from 'react';
import './App.css';
import pricingList from './components/ParsingPlantItems/pricing-plan.json';
// eslint-disable-next-line max-len
import transactionList from './components/TransactionHistory/transactionList.json';
import Profile from './components/Profile/Profile';
import Stats from './components/Stats/Stats';
import PricisingPlan from './components/ParsingPlantItems/PricisingPlan';
// eslint-disable-next-line max-len
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar:
    'http://okcolab.sasquatchstudio.co/wp-content/uploads/2017/05/avatar-sample.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const stats = [
  {id: 'id-1', label: '.docx', percentage: 22},
  {id: 'id-2', label: '.pdf', percentage: 4},
  {id: 'id-3', label: '.mp3', percentage: 17},
  {id: 'id-4', label: '.psd', percentage: 47},
  {id: 'id-5', label: '.pdf', percentage: 10},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile
          name={user.name}
          tag={user.tag}
          avatar={user.avatar}
          location={user.location}
          stats={user.stats}
        />
        <Stats title="Upload stats" stats={stats} />
        <PricisingPlan pricingList={pricingList} />
        <TransactionHistory transactionList={transactionList} />
      </div>
    );
  }
}

export default App;
