
import UserCard from './User-task/UserCard';
import user from '../data/user.json';
// ===============================================================

import Stats from './Stats-task/Stats.js';
import statsData from '../data/data.json'

// ================================================================
import Friends from './FriendsList-task/FriendsList'
import friendsList from '../data/friends.json'

// ================================================================
import TransactionsHistory from './Transactions-task/TransactionsList';
import transactions from '../data/transactions.json'

// ================================================================
import css from './App.module.css'


function App() {
  return <div className={ css.container }>
    <UserCard
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Stats
      title='Upload stats'
      stats={statsData}
    />
    <Friends
      friendsList={friendsList}
    />
    <TransactionsHistory
      transactions={transactions}
    />
  </div>
};


export default App