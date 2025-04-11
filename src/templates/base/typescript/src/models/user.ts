interface User {
  name: string;
  descrition: string;
}

class UsersModel {
  users: User[];

  constructor() {
    this.users = [
      { name: 'RulerChen', descrition: 'Author of this project' },
    ];
  }

  getUsers(): User[] {
    return this.users;
  }
}

const usersModel = new UsersModel();

export default usersModel;
