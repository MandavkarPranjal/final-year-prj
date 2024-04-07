import { Role } from "@prisma/client";


export class ViewUserDto{
    id: string;
    name: string;
    email: string;
    hashedPassword: string;
    role: Role[];
}