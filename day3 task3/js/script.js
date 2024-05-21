function reqListener() {
    const countryarry = JSON.parse(this.responseText);
     console.log(countryarry);
     for (let country of countryarry){
     console.table(country.name.common);
     console.table(country.region);
     console.table(country.subregion);
     console.table(country.population);
     }
  }
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  