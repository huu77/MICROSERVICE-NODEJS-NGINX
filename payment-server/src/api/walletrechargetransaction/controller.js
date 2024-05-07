const { getRevenuesServer } = require("./server");

const getRevenues = async (req, res) => {
  const result = await getRevenuesServer();
  return res.json(result);
};
 
module.exports = { getRevenues };
