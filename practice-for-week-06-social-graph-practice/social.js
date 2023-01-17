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
    // Your code here
  }
}

module.exports = SocialNetwork;