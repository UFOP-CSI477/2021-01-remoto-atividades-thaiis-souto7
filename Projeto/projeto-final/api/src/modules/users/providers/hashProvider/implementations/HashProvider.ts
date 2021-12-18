import { hash, compare } from 'bcryptjs';
import { IHashProvider } from '../IHashProvider';

export class HashProvider implements IHashProvider {
  async generationHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}
