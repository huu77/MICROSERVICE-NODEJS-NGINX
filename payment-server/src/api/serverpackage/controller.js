const {
  createServicePackageService,
  updateServicePackage,
  getOneServicePackage,
  getListServicePackagePrice,
} = require("./server");

const createServicePackage = async (req, res) => {
  const result = await createServicePackageService(req.body);
  return res.json(result);
};

const update = async (req, res) => {
  const result = await updateServicePackage(req.body);
  return res.json(result);
};

 const getOne = async (req, res) => {
  const result = await getOneServicePackage(req.query);
  return res.json(result);
};

const getListService = async (req, res) => {
  const result = await getListServicePackagePrice(req.query);
  return res.json(result);
};
module.exports = {
  createServicePackage,
  getListService,
  update,
  getOne,
};
