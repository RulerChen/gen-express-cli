class UsersModel {
  constructor() {
    this.users = [{ name: 'RulerChen', description: 'Author of this project' }];
  }

  getUsers() {
    return this.users;
  }
}

const usersModel = new UsersModel();

export default usersModel;
