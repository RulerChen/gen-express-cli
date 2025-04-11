interface User {
  name: string;
  description: string;
}

class UsersModel {
  users: User[];

  constructor() {
    this.users = [{ name: 'RulerChen', description: 'Author of this project' }];
  }

  getUsers(): User[] {
    return this.users;
  }
}

const usersModel = new UsersModel();

export default usersModel;
