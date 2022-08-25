const sortByAscendingBalance = 
   [...users].sort((firstUser, secondUser) =>
    firstUser.balance - secondUser.balance);

[...users].sort((firstUser, secondUser) => firstUser.balance.localeCompare(secondUser.balance));
// Change code above this line