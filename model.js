const A = 4;  // addresss length

class Model {
   constructor(size) {
      this.size = size;
      this.clear();
      this.memo = new Array(size).fill(0);

      // test
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
         case 1:  // 01 - зчитати з пам'яті
            this.summator = +this.memo[address];
            this.counter++;
            break;
         case 2:  // 02 - записати в пам'ять
            this.memo[address] = +this.summator;
            this.counter++;
            break;
         case 3:  // 03 - додати до суматора
            this.summator += address;
            this.counter++;
            break;
         case 11: // 11 - перейти
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

