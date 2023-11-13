/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum= 10+20

/* console.log(sum) */

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random=Math.floor(Math.random()*21)

/* console.log(random) */

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me= {
  name: 'Vincenzo',
  surname: 'Arpaia',
  age: 28
}
/* console.log(me) */

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age
/* console.log(me) */

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills= ['HTML','CSS','JavaScript']
/* console.log(me) */

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('Sonic Pi')
/* console.log(me) */


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()
/* console.log(me) */

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  return Math.ceil(Math.random()*6)
}
/* console.log(dice()) */

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(n1,n2){
  if(n1>n2) {
    return n1
  } else if (n1 == n2) {
    return ('i numeri inseriti sono uguali')
  } else {
    return n2
  }
}
/* console.log(whoIsBigger(2,4))
console.log(whoIsBigger(4,2))
console.log(whoIsBigger(4,4)) */

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

let SpitArr = (str) => str.split(' ')
/* console.log(SpitArr('Lorem ipsum dolor sit amet')) */

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

let deleteOne = (str, bool) => {
  if(bool == true) {
    let strSplitted= str.split('')
    strSplitted.shift()
    let removeFirst=strSplitted.join('')
    return removeFirst
  } else {
    let strSplitted= str.split('')
    strSplitted.pop()
    let removeFirst=strSplitted.join('')
    return removeFirst
  }
}
/* console.log(deleteOne('stringa', true))
console.log(deleteOne('booleano', false)) */

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters (str) {
  let strSplit= str.split(' ')
  for(let i=0; i<strSplit.length; i++) {
    if(!isNaN(parseInt(strSplit[i]))) {
      strSplit.splice(i,1)
    }
  }
  let noNstr=strSplit.join(' ')
  return noNstr
}
/* console.log(onlyLetters('prova con 3 numeri, anzi 2')) */

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail (mail) {
//mail valida: string@string.string
let atInd=mail.trim().indexOf('@')
let dotInd=mail.indexOf('.')


  if(atInd != 0 && atInd != -1 && dotInd != mail.length-1 && (dotInd-atInd)>1) {
    return true
  } else {
    return false
  }
}

console.log(isThisAnEmail('user@mail.com')) // indrizzo valido
console.log(isThisAnEmail('usermail.com')) //manca la chioccila (atInd =-1 se è assente nella stringa)
console.log(isThisAnEmail('user@mailcom')) // manca il punto (atDot =-1, la differenza degli indici non può mai essere maggiore di 1)
console.log(isThisAnEmail('@mail.com')) // manca lo username
console.log(isThisAnEmail('user@mail.')) // nel dominio manca la parte dopo il punto
console.log(isThisAnEmail('user@.com')) //nel dominio manca la parte prima del punto

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
let whatDayIsIt= function () {
  let today = new Date()
  console.log(today)
  switch (today.getDay()) {
    case 0:  {
      return 'Domenica';
      break;}
    case 1: {
      return 'lunedì'
      break;}
    case 2: {
      return 'martedì'
      break;}
    case 3: {
      return 'mercoledì'
      break;}
    case 4: {
      return 'giovedì'
      break;}
    case 5: {
      return 'venerdì'
      break;}
    case 6: {
      return 'sabato'
      break;}  
    default: {
      return 'errore'
    }
  }
  
}
/* console.log(whatDayIsIt()) */

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices (n)  {
  let singleDice =[]
  let sum=0;
  for(let i=0; i<n; i++) {
    singleDice[i]=dice()
    sum+=dice()
  }
 let result = {}
 result.sum= sum;
 result.values= singleDice
 return result
}
/* console.log(rollTheDices(3)) */

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(day,month,year) {
  let todayMs = new Date().getTime()
  let inputdateMs = new Date(year, month-1, day).getTime()
  let diffMs= todayMs - inputdateMs
  return diffDays= parseInt(diffMs/1000/60/60/24)
  
}
/* console.log(howManyDays(1,1,2023))
console.log(howManyDays(7,11,2013)) */

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday (day,month) {
  let today=new Date()
  if(day == today.getDate() && (month) == today.getMonth()+1) {
    console.log(true)
  } else {
    console.log(false)
  }
}
/* isTodayMyBirthday(13,11)
isTodayMyBirthday(15,8) */

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp (obj, prop)  {
  delete obj[prop]
  return obj
}
/* console.log(deleteProp({nome:'Vincenzo', cognome:'Arpaia', age:28},'age'))*/

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie() {
  let newerY=0;
  let newerInd
  for(let i=0; i<movies.length; i++) {
    if(newerY < movies[i].Year) {
      newerY = movies[i].Year
      newerInd=i
    }
    
  }
  return movies[newerInd]

}
/* console.log(newestMovie()) */

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies() {
  let onlyMovie = movies.filter(mov => mov.Type=='movie') // nel caso fossero presenti altre tipologie di contenuti nell'array movies
  return onlyMovie.length
}
/* console.log(countMovies()) */

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears (){
  let onlyYears=[]
  movies.forEach( mov => onlyYears.push(mov.Year))
  return onlyYears
}
/* console.log(onlyTheYears()) */

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium() {
  let after2k =movies.filter(mov => mov.Year>1999)
  return after2k
}
/* console.log(onlyInLastMillennium()) */

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears() {
  let yearSum =movies.reduce((sum, mov) => sum + Number(mov.Year),0)
 return yearSum 
}
/* console.log(sumAllTheYears()) */

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(title) {
  let search=movies.filter(mov => mov.Title.includes(title)) // ricerca però case sensitive
  return search
}
/* console.log(searchByTitle('Lord'))
console.log(searchByTitle('Ring')) */

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(title){
  let result= {match:[],unmatch:[]}
  movies.forEach(mov => {
    if(mov.Title.includes(title)) {
      result.match.push(mov)
    } else {
      result.unmatch.push(mov)
    }
  })
  return result
}
/* console.log(searchAndDivide('Ring'))
console.log(searchAndDivide('Aven')) */

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(n) {
movies.splice(n,1)
return movies
}
/* console.log(removeIndex()) */

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function selectbyId(ele,ID) {
  ele=document.querySelector(ID)
}
selectbyId('body','#container')

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selectByTag(ele, tag) {
  ele=document.querySelectorAll(tag)
}
selectByTag('tdS', 'td')

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function printTd() {
  tdS=document.querySelectorAll('td')
  for(i=0; i<tdS.length; i++) {
    console.log(tdS[i].innerText)
  }
}
printTd()

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function paintItRed(ele, selector, color) {
ele=document.querySelectorAll(selector)
ele.forEach(a => a.style.backgroundColor=color)
}
paintItRed('links', 'a', 'red')

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function createChildElement (parent, child, content){
parName=document.querySelector(parent)
childName=document.createElement(child)
parName.appendChild(childName)
childName.innerText=content
}
createChildElement('#myList', 'li', 'testo aggiunto da Js')

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function deleteChild (selector) {
  let ChildList=document.querySelectorAll(selector)
  ChildList.forEach(ele => ele.remove()) 
}
deleteChild('ul li')

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addClass(ele, classN) {
let eleList=document.querySelectorAll(ele)
console.log(eleList)
eleList.forEach(ele => {
  ele.classList.add(classN)
})
}
addClass('tr','test')


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(n) {
  for(i=0; i<=n; i++) {
    let str =''
    for(j=0; j<i; j++) {
      str+= '*' 
    }
    console.log(str)
  }
}
/* halfTree(3)
halfTree(6) */ 

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

function tree(n) {
  for(i=1; i<=n; i++) {
    let str =''
    for(a=1; a<=n-i; a++) {
      str+=' '
    }
    for(b=0; b<i+(i-1); b++) {
      str+= '*'
    }
    for(a=1; a<=n-i; a++) {
      str+=' '
    }
    console.log(str)
  }
}
/* tree(5)
tree(7)*/


/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(n) {
  let resti=[]
  let maxDiv=Math.ceil(n**(1/2))
  if(n === 1) {
    return false
  }
  for (let i=2; i<=maxDiv; i++) {
    resti.push(n%i)  
  }
  return resti.every(n => n!=0)
}
/* console.log(isItPrime(17))
console.log(isItPrime(11))
console.log(isItPrime(49))
console.log(isItPrime(18)) */
