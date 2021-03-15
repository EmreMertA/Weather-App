const key = "rWToLGvBqaSSgxRBs4Mf2Wmm4hOM7zgd";

const havaDurumuGetir = async (id) => {
  const temelUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
  const sorgu = `${id}?apikey=${key}`;

  const res = await fetch(temelUrl + sorgu);
  const veri = await res.json();

  return veri[0];
};

const sehirGetir = async (konum) => {
  const temelUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/search";

  const sorgu = `?apikey=${key}&q=${konum}`;
  const res = await fetch(temelUrl + sorgu);
  const veri = await res.json();

  return veri[0];
};

/* sehirGetir("Denizli")
  .then((veri) => {
    return havaDurumuGetir(veri.Key);
  })
  .then((veri) => {
    console.log(veri);
  })
  .catch((err) => {
    console.log(err);
  });
 */
