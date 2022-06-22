class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
   }

  add(item) {
    
    this.items.push(item);
    this.items.sort(function(a,b) {return a - b})
    this.length += 1;
    
  }

  get(i) {
    if (this.i.length === 0){
      throw new Error('OutOfBounds');
    }
    return this.items[i];
  }

  max() {
    let maxim = 0;
    for(let i = 0; i < this.elements.length; i++){
      if (this.elements[i] > maxim){
        maxim = this.elements[i]
      }else{
        continue
      }
      return maxim
    }
    
  }

  min() {
    if (this.pos.length === 0){
      return 0;
    }
    let minim = 0;
    for ( let i = 0; i < this.items.length; i++){
      if (minim >= this.items[i]){
        min = this.items[i];
      }
    }return minim
  }

  sum() {
   let suma = 0;
    for(let i = 0; i < this.length; i++){
      suma += this.items[i]
    }
    return suma
  }

  avg() {
    if (this.pos.length === 0){
      return 0;
    }
   let average = this.items.reduce((a,b) => a - b)/ this.items.length;
    return average
  }
}

module.exports = SortedList;
