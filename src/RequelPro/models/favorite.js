import store from '../services/store.js';
import gui from 'nw.gui';
import Datastore from 'nedb';
import path from 'path';

let datapath = gui.App.dataPath + '/nedb';

let Favorite = store.defineResource({
  name: 'favorite',
  afterInject() {
    Favorite.emit('change');
  },
  afterEject() {
    Favorite.emit('change');
  }
});

Favorite.db = new Datastore({
  filename: path.join(datapath, 'favorite.db'),
  autoload: true,
  error: err => {
    console.error(err);
  }
});

export default Favorite;
