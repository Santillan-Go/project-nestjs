import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/app.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        email: string;
        name: string | null;
        password: string;
    }>;
    findAll(): Promise<{
        id: number;
        email: string;
        name: string | null;
        password: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        email: string;
        name: string | null;
        password: string;
    }>;
    getByEmail({ email }: {
        email: string;
    }): Promise<{
        id: number;
        email: string;
        name: string | null;
        password: string;
    }>;
    deleteOne({ id }: {
        id: number;
    }): Promise<{
        message: string;
    }>;
}
