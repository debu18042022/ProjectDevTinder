const adminAuth = (req, res, next) => {
  console.log("adminAuth is getting checked");
  const token = "adminxyz";
  const isAuthorized = token === "adminxyz";
  if (!isAuthorized) {
    res.status(401).send("unAuthorized request");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("userAuth is getting checked");
  const token = "userxyz";
  const isAuthorized = token === "userxyz";
  if (!isAuthorized) {
    res.status(401).send("unAuthorized request");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
