const axios = require("axios");

async function fetchData_Dapil_Dpd(req, res, next) {
  try {
    const response = await axios.get(
      "https://caleg.zakiego.com/api/dpd/dapil/list"
    );
    res.locals.dataApi = response.data; // Simpan data di objek locals untuk mengaksesnya di rute-rute berikutnya
    next();
  } catch (error) {
    res.locals.dataApi = []; // Atau lakukan sesuatu jika pengambilan data gagal
    next(error);
  }
}
async function fetchData_Dapil_Dpr_ri(req, res, next) {
  try {
    const response = await axios.get(
      "https://caleg.zakiego.com/api/dpr-ri/dapil/list"
    );
    res.locals.dataApi = response.data; // Simpan data di objek locals untuk mengaksesnya di rute-rute berikutnya
    next();
  } catch (error) {
    res.locals.dataApi = []; // Atau lakukan sesuatu jika pengambilan data gagal
    next(error);
  }
}
async function fetchData_Dapil_Dprd_prov(req, res, next) {
  try {
    const response = await axios.get(
      "https://caleg.zakiego.com/api/dprd-provinsi/dapil/list"
    );
    res.locals.dataApi = response.data; // Simpan data di objek locals untuk mengaksesnya di rute-rute berikutnya
    next();
  } catch (error) {
    res.locals.dataApi = []; // Atau lakukan sesuatu jika pengambilan data gagal
    next(error);
  }
}
async function fetchData_Dapil_Dprd_kab(req, res, next) {
  try {
    const response = await axios.get(
      "https://caleg.zakiego.com/api/dprd-kabupaten-kota/dapil/list"
    );
    res.locals.dataApi = response.data; // Simpan data di objek locals untuk mengaksesnya di rute-rute berikutnya
    next();
  } catch (error) {
    res.locals.dataApi = []; // Atau lakukan sesuatu jika pengambilan data gagal
    next(error);
  }
}

module.exports = {
  fetchData_Dapil_Dpd,
  fetchData_Dapil_Dpr_ri,
  fetchData_Dapil_Dprd_prov,
  fetchData_Dapil_Dprd_kab,
};
