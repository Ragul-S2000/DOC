function reqListener() {
    const countryarry=JSON.parse(this.responseText);
    console.log(countryarry);
    for(let country of countryarry){
console.table(country.flags.png);
    }
  }
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  