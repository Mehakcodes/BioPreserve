const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoute");
// const messageRoutes = require("./routes/messageRoutes");

const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);
// app.use("/api/message", messageRoutes);

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});

// const { PrismaClient } = require('@prisma/client')

// const prisma = new PrismaClient()

// async function main() {
//   // ... you will write your Prisma Client queries here
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })