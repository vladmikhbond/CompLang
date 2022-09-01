class Model {
   constructor(size) {
      this.size = size;
      this.clear();
      // in memo are strings like "dd dddd" where d is a digit
      this.memo = new Array(size).fill('00 0000');

      ///
      this.memo[0] = "01 0010";
      this.memo[1] = "03 0002";
      this.memo[2] = "02 0011";
      this.memo[10]= "00 1234";
      
   }

   step() {
      
      let command = + this.memo[this.counter].slice(0, 2);
      let address = + this.memo[this.counter].slice(3, 7);
      switch (command) {
         case 1: 
            this.summator = +this.memo[address].replace( ' ', '');
            this.counter++;
            break;
         case 2: 
            this.toMemo(address, +this.summator);
            this.counter++;
            break;
         case 3: 
            this.summator += address;
            this.counter++;
            break;
         case 11: 
            this.counter = address;
            break;

      }
   } 

   clear() {
      this.memo = new Array(this.size).fill('00 0000');
      this.counter = 0;
      this.summator = 0;
   }

   toMemo(addr, num) {
      let co = ('00' + ((num / 10000) | 0)).slice(-2);
      let ad = ('0000' + (num % 10000)).slice(-4);
      this.memo[addr] = co + ' ' + ad;
   }

   // fromMemo(addr) {
   //    return +this.memo[addr].replace(' ', '');
   // }
}

