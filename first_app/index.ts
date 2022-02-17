import axios from 'axios';

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/hello';

interface Phrase {
  word: string;
  origin: string;
  meanings: Array<object>;
}

axios.get(url)
  .then((response) => {
    const { data } = response;
    const phrase = data[0] as Phrase;

    logPhrase(phrase.word);
  });


const logPhrase = (word: string) => {
  console.log(word)
}