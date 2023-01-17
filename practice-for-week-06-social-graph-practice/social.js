// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    this.currentID++;
    const user = {id: this.currentID, name: name}
    this.users[this.currentID] = user;
    this.follows[this.currentID] = new Set();
    return user['id'];
  }

  getUser(userID) {
    if (!this.users[userID]) {
      return null;
    }
    return this.users[userID];
  }

  follow(userID1, userID2) {
    if (!this.users[userID2] || !this.users[userID1]) {
      return false;
    }

    this.follows[userID1].add(userID2);
    return true;
  }

  getFollows(userID) {
    return this.follows[userID];
  }

  getFollowers(userID) {
    const followers = new Set();
    for (const user in this.follows) {
      if (this.follows[user].has(userID)) {
        followers.add(Number(user));
      }
    }

    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    //set up for the breadth first traversal
    const queue = [];
    const visited = new Set([userID]);
    queue.push([userID]);
    const recommendedFollows = [];

    //while there is stuff in the queue
    while(queue.length) {
      //pull off first path on queue and identify follows of the last in path
      const currentPath = queue.shift();
      const currentID = currentPath[currentPath.length - 1];
      const nextFollows = this.getFollows(currentID);

      //if the path has not met degrees of separation
      if (currentPath.length - 2 < degrees) {
        //go through each of the next follows and
        nextFollows.forEach(follow => {
          //if it has not been visited
          if(!visited.has(follow)){
            //add it to the path and push to the queue
            queue.push(currentPath.concat(follow));
            //push to recommended follows if it is not original user or it's immediate follows
            if(currentPath.length > 1) {
              recommendedFollows.push(follow);
            }
            
            //add the user to visited
            visited.add(follow);
          }
        })
      }
    }

    return recommendedFollows;
  }
}

module.exports = SocialNetwork;