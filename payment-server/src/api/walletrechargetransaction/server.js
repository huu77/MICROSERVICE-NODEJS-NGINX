const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const ResponseFactory = require("../../response_design");

const getRevenuesServer = async () => {
  await prisma.$connect();
  try {
    const totalAmount = await prisma.walletrechargetransaction.aggregate({
      _sum: {
        amount: true
      }
    });

    // Lấy giá trị tổng từ kết quả trả về
    const total = totalAmount._sum.amount;

    // Trả về kết quả
    return ResponseFactory.createResponse(200, { totalAmount: total });
  } catch (error) {
    return ResponseFactory.createResponse(500, error);
  } finally {
    await prisma.$disconnect();
  }
};


 
module.exports = { getRevenuesServer };
