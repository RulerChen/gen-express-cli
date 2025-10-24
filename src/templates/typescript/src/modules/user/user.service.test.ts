import { userService, clearUsers } from './user.service.js';
import { CreateUserDto } from './user.types.js';
import { AppError } from '#src/middlewares/error-handler.js';

describe('UserService', () => {
  beforeEach(() => {
    clearUsers();
  });

  describe('getAllUsers', () => {
    it('should return all users when users exist', async () => {
      const user1Data: CreateUserDto = {
        name: 'John Doe',
        email: 'john@example.com',
      };
      const user2Data: CreateUserDto = {
        name: 'Jane Smith',
        email: 'jane@example.com',
      };

      await userService.createUser(user1Data);
      await userService.createUser(user2Data);

      const users = await userService.getAllUsers();
      expect(users).toHaveLength(2);
      expect(users[0]?.name).toBe('John Doe');
      expect(users[1]?.name).toBe('Jane Smith');
    });
  });

  describe('getUserById', () => {
    it('should return a user when found by ID', async () => {
      const userData: CreateUserDto = {
        name: 'John Doe',
        email: 'john@example.com',
      };

      const createdUser = await userService.createUser(userData);
      const foundUser = await userService.getUserById(createdUser.id);

      expect(foundUser).toBeDefined();
      expect(foundUser.id).toBe(createdUser.id);
      expect(foundUser.name).toBe('John Doe');
      expect(foundUser.email).toBe('john@example.com');
    });

    it('should throw AppError with 404 when user not found', async () => {
      const nonExistentId = 'non-existent-id';

      await expect(userService.getUserById(nonExistentId)).rejects.toThrow(AppError);
      await expect(userService.getUserById(nonExistentId)).rejects.toThrow('User not found');

      try {
        await userService.getUserById(nonExistentId);
      } catch (error) {
        expect(error).toBeInstanceOf(AppError);
        expect((error as AppError).statusCode).toBe(404);
      }
    });
  });

  describe('createUser', () => {
    it('should create a new user with valid data', async () => {
      const userData: CreateUserDto = {
        name: 'John Doe',
        email: 'john@example.com',
      };

      const createdUser = await userService.createUser(userData);

      expect(createdUser).toBeDefined();
      expect(createdUser.id).toBeDefined();
      expect(createdUser.name).toBe('John Doe');
      expect(createdUser.email).toBe('john@example.com');
      expect(createdUser.createdAt).toBeInstanceOf(Date);
    });
  });

  describe('deleteUser', () => {
    it('should delete an existing user', async () => {
      const userData: CreateUserDto = {
        name: 'John Doe',
        email: 'john@example.com',
      };

      const createdUser = await userService.createUser(userData);
      const usersBefore = await userService.getAllUsers();
      expect(usersBefore).toHaveLength(1);

      await userService.deleteUser(createdUser.id);

      const usersAfter = await userService.getAllUsers();
      expect(usersAfter).toHaveLength(0);
    });

    it('should throw AppError with 404 when deleting non-existent user', async () => {
      const nonExistentId = 'non-existent-id';

      await expect(userService.deleteUser(nonExistentId)).rejects.toThrow(AppError);
      await expect(userService.deleteUser(nonExistentId)).rejects.toThrow('User not found');

      try {
        await userService.deleteUser(nonExistentId);
      } catch (error) {
        expect(error).toBeInstanceOf(AppError);
        expect((error as AppError).statusCode).toBe(404);
      }
    });
  });
});
