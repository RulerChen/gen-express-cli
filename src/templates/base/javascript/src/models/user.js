class UsersModel {
  constructor() {
    this.users = [
      { name: 'RulerChen', descrition: 'Author of this project' },
      { name: 'joshtu0627', descrition: 'Author of this project' },
    ];
  }

  getUsers() {
    return this.users;
  }
}

const usersModel = new UsersModel();

export default usersModel;
