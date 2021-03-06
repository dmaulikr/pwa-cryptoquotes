import {extendObservable} from 'mobx';

class CardsStore {
  constructor() {
    extendObservable(this, {
      "b2u": {id: null,  low: null, quote: null, high: null, date: null },
      "mercado": {id: null,  low: null, quote: null, high: null, date: null }
    });
  }
}

const cardsStore = new CardsStore();

export default cardsStore;
