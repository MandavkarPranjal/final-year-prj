import { Role } from "@prisma/client";


export class ViewUserDto{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    hashedPassword: string;
    role: Role[];
}