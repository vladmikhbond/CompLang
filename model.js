const A = 4;  // addresss length

class Model {
   constructor(size) {
      this.size = size;
      this.clear();
      // in memo are strings like "dd dddd" where d is a digit
      this.memo = new Array(size).fill(0);

      ///
      this.memo[0] = 10010;
      this.memo[1] = 30002;
      this.memo[2] = 20011;
      this.memo[10]= "001234";
      this.memo[3]=  "110000";
   }

   step() {
      let command = + (this.memo[this.counter] / 10**A) | 0;
      let address = + (this.memo[this.counter]) % 10**A;
      switch (command) {
         case 1: 
            this.summator = +this.memo[address];
            this.counter++;
            break;
         case 2: 
            this.memo[address] = +this.summator;
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
      this.memo = new Array(this.size).fill(0);
      this.counter = 0;
      this.summator = 0;
   }

}

