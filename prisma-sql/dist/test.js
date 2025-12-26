"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function Author() {
    const author = await prisma.Author.create({
        data: {
            name: "abhi"
        }
    });
    console.log(author);
}
Author().catch(console.error).finally(() => prisma.$disconnect);
async function book() {
    const book = await prisma.Book.create({
        data: {
            title: "abhi book 1"
        }
    });
    console.log(book);
}
book().catch(console.error).finally(() => prisma.$disconnect);
async function main() {
    const user = await prisma.user.create({
        data: {
            name: "Abhi",
            age: 15
        }
    });
    console.log(user);
}
main().catch(console.error).finally(() => prisma.$disconnect);
//# sourceMappingURL=test.js.map