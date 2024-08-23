export declare class HashingService {
    private readonly saltRounds;
    hashPassword(password: string): Promise<string>;
    comparePassword(password: string, hashedPassword: string): Promise<boolean>;
}
