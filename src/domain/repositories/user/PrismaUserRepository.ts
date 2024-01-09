import User from '../../entities/user';
import UserRepository from './userRepository';
import prisma from '../../../adapters/database'

class PrismaUserRepository implements UserRepository {
  async createUser(user: Omit<User, 'id'>): Promise<User> {
    const createdUser = await prisma.user.create({
      data: user,
    })
    return createdUser
  }

  async getUserById(userId: number): Promise<any> {
    const user = await prisma.user.findMany({
      where: { id: userId },
    })
    return user
  }
}

export default PrismaUserRepository;