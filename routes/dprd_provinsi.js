const express = require("express");
const router = express.Router();
const querystring = require("querystring");

const { fetchData_Dapil_Dprd_prov } = require("../middleware/fetchDapil");

function paginate(items, itemsPerPage, currentPage) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.slice(startIndex, endIndex);
}

router.get("/", fetchData_Dapil_Dprd_prov, async (req, res) => {
  const dataApi = res.locals.dataApi.data;

  const searchData = req.query.searchFilter || "";
  const filteredData = dataApi.filter((item) => {
    return (
      item.namaDapil &&
      item.namaDapil.toLowerCase().includes(searchData.toLowerCase())
    );
  });

  const itemsPerPage = 10;
  const currentPage = req.query.page || 1;
  const DataLength = filteredData.length;
  const maxPage = Math.ceil(DataLength / itemsPerPage);
  const paginatedData = paginate(filteredData, itemsPerPage, currentPage);

  const queryString = querystring.stringify({
    page: currentPage,
    searchFilter: searchData,
  });

  // gabungin url
  const url = req.baseUrl + "?" + queryString;
  console.log(url);
  res.render("dapil/dapilList", {
    title: "List Dapil DPR RI",
    dataApi: paginatedData,
    maxPage: maxPage,
    currentPage: currentPage,
    keyword: searchData,
    queryString: url,
  });
});

module.exports = router;
