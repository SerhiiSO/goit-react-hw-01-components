import { GlobalStyle } from "./components/styles/GlobalStyles";
import user from "./data/user";
import Profile from "./components/socialProfile/Profile";
import statistics from "./data/statistics.json";
import Statistics from "./components/statistics/Statistics";
import friends from "./data/friends.json";
import Friendlist from "./components/friends/FriendsList";
import transactions from "./data/transactions.json";
import Transaction from "./components/transactions/Transactions"
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <Statistics stats={statistics} />
      <Friendlist friends={friends} />
      <Transaction items={transactions} />
    </>
  );
}
