import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    await prisma.user.create({
        data:{
            name:'testuser',
            email:'test@email.com',
            mobile:123456,
            city:'testcity'
        }
    })

}

main()