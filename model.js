class Model {
   constructor(size) {
      this.size = size;
      this.clear();

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
            this.memo[address] = toMemo (+this.summator)
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

}

function toMemo(n) {
   let comm = ('00' + ((n / 10000) | 0)).slice(-2);
   let addr = ('0000' + (n % 10000)).slice(-4);
   return comm + ' ' + addr;
}