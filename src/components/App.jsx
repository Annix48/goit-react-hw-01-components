

import { Profile } from './Profile/Profile';
import user from '../config/user';

import { Statistics } from './Statistics/Statistics';
import data from '../config/data';

// import { FriendList } from './FriendsList';
// import friends from '../configs/friends';

// import { TransactionHistory } from './TransactionHistory';
// import transactions from '../configs/transactions';


export const App = () => {
  return (
    
      <><Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
      <Statistics title="Upload stats" stats={data} /></> 
      // <FriendList friends={friends} />
      // <TransactionHistory items={transactions} /> */
    
  );
};

