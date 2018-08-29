const getLastPage = link => {
  const parts = link.split("page=");
  return parseInt(parts[parts.length - 1]);
};

module.exports = {
  getLastPage
};
