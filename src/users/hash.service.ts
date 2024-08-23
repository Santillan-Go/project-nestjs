import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashingService {
  // Salt rounds for hashing (can adjust this as per security requirement)
  private readonly saltRounds = 10;

  // Function to hash a password
  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds);
    return await bcrypt.hash(password, salt);
  }

  // Function to compare password with hashed password
  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
