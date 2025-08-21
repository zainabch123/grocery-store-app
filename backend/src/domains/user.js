import prisma from "../utils/prisma.js";

const registerUserdb = async (firstName, lastName, email, password) => {
  return prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password,
    },
  });
};


export {registerUserdb};