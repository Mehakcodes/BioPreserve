/* eslint-disable no-unused-vars */
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// async function main(req, res, next) {
//   signup(req, res, next)
// }

module.exports.signup = async (req, res, next) => {
    try{
      const {email ,
          phone ,
          createPassword ,
          name ,
          dob,
          panNo ,
          adhaarCardNo ,
          currentAddress ,
          permanentAddress ,
          nationality ,
          accountType } = req.body;

      const user = await prisma.user.create({
          data: {
            email : email,
          phone : phone,
          password : createPassword,
          name : name,
          dob: dob+"T00:00:00.000Z",
          panNo : panNo,
          adhaarCardNo : adhaarCardNo,
          currentAddress : currentAddress,
          permanentAddress : permanentAddress,
          nationality : nationality,
          accountType : accountType,
          },
        });

        return res.json({status: true, user});
    } 
    catch(e) {
      next(e);
    }
  }

  module.exports.login = async (req, res, next) => {
    try{
      const {email ,
          password } = req.body;

      const user = await prisma.user.findUnique({
        where:  {
            email : email,
          password : password
          },
        });

        // if(user)
          return res.json({status: true, user});

        // return res.json({status: false});
    } 
    catch(e) {
      next(e);
    }
  }

// signup.then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   });

// module.exports.signup();