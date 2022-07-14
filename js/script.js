//iz dokumenta uzimamo dugmad calculate i add
const calculate = document.querySelector('#calculate');
const add = document.querySelector('#add');

//definisemo funkciju koja ce da dodaje predmete
const dodaj = () => {
  //iz dokumenta uzimamo objekat formu
  const form = document.querySelector('form');
  //iz dokumenta uzimamo vednost naziva, bodova i ocene datog predmeta
  const naziv = document.querySelector('#predmet').value;
  const ocena = document.querySelector('#ocena').value;
  const bodovi = document.querySelector('#bodovi').value;
  //proveravamo da li su sve vrednosti unete od strane korisnika
  if (!naziv || !ocena || !bodovi) {
    //ako nisu upozoravamo ga i napustamo funkciju
    alert('Unesite sve podatke o predmetu!');
    exit();
  }
  //kreiramo novi red i kolone, dodeljujemo im neophodne klase i sadrzaj
  const noviRed = document.createElement('tr');
  const kolonaNaziv = document.createElement('td');
  kolonaNaziv.className = 'predmet';
  kolonaNaziv.innerText = `${naziv}`;
  const kolonaBodovi = document.createElement('td');
  kolonaBodovi.className = 'bodovi';
  kolonaBodovi.innerText = `${bodovi}`;
  const kolonaOcena = document.createElement('td');
  kolonaOcena.className = 'ocena';
  kolonaOcena.innerText = `${ocena}`;
  //dodajemo red telu tabele i kolon dodajemo redu
  document.querySelector('tbody').appendChild(noviRed);
  noviRed.appendChild(kolonaNaziv);
  noviRed.appendChild(kolonaBodovi);
  noviRed.appendChild(kolonaOcena);
  //ponistavamo vrednosti forme
  form.reset();
};

//definisemo funkciju koja ce da racuna prosek bodova i ocena
const racunanje = () => {
  //iz dokumenta uzimamo objekte u kojima se nalaze bodovi i pravimo NodeList bodovi
  const bodovi = document.querySelectorAll('.bodovi');
  //iz dokumenta uzimamo objekte u kojima se nalaze ocene i pravimo NodeList ocene
  const ocene = document.querySelectorAll('.ocena');
  //iz dokumenta uzimamo objekte prosek bodova i prosek ocena
  const prosekBodova = document.querySelector('#prosek-bodovi');
  const prosekOcena = document.querySelector('#prosek-ocena');
  //definisemo sumu = 0 i deklarisemo prosek
  let suma = 0;
  let prosek;

  //vrednost unutrasnjeg teksta svakog objekta bod pretvaramo u tip Float i dodajemo ga na sumu
  bodovi.forEach((bod) => {
    suma += parseFloat(bod.innerText);
  });
  //racunamo prosek bodova i dodeljujemo njegovu vrednost promenljivoj prosek,
  //zatim unutrasnjoj vrednosti objekta prosekBodova dodeljujemo vrednost promenljive prosek zaokruzenu na jednu decimalu
  prosek = suma / parseFloat(bodovi.length);
  prosekBodova.innerText = `${prosek.toFixed(1)}`;

  //moramo nulirati sumu
  suma = 0;
  //vrednost unutrasnjeg teksta svakog objekta ocena pretvaramo u tip Float i dodajemo ga na sumu
  ocene.forEach((ocena) => {
    suma += parseFloat(ocena.innerText);
  });
  //racunamo prosek ocena i dodeljujemo njegovu vrednost promenljivoj prosek,
  //zatim unutrasnjoj vrednosti objekta prosekOcena dodeljujemo vrednost promenljive prosek zaokruzenu na jednu decimalu
  prosek = suma / ocene.length;
  prosekOcena.innerText = `${prosek.toFixed(1)}`;
};

//kada se klikne na dugme add pokrece se funkcija dodaj, a kada se klikne na dugme calculate pokrece se funkcija racunanje
add.addEventListener('click', () => dodaj());
calculate.addEventListener('click', () => racunanje());
