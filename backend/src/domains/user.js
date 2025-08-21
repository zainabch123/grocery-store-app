import prisma from "../utils/prisma.js";


const registerUserdb = async (firstName, lastName, email, hashedPassword) => {
  return prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    },
  });
};

const loginUserdb = async (email, password) => {
    return prisma.user.findUnique({
        where: {
            email: email,
        },
    })
};


export {registerUserdb, loginUserdb};