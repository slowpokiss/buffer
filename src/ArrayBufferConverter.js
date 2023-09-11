import getBuffer from './getBuffer';

export default class ArrayBufferConverter {
  load() {
    this.bufka = new Uint16Array(getBuffer());
  }

  toString() {
    let str = '';
    for (let i = 0; i < this.bufka.length; i += 1) {
      str += String.fromCharCode(this.bufka[i]);
    }
    return str;
  }
}
