
const model = new Model(20);
initGUI();
show();

counter.addEventListener('change', () => {model.counter = counter.value; show(); } );
summator.addEventListener('change', () => {model.summator = +summator.value; } );
stepBtn.addEventListener('click', () => {model.step(); show(); } );
clearBtn.addEventListener('click', () => {model.clear(); show(); } );


function initGUI() 
{
   for (let i = 0; i < model.size; i++) 
   {
      const div = document.createElement("div");
      div.innerHTML = `<label>${('000' + i).slice(-4)} </label>` +
      `<input id="a${i}" type="text" </input>` +
      `<span style="display: none"> ◄ </span>`
      memo.appendChild(div);

      div.children[1].addEventListener('change', function() {
            let i = this.id.slice(1);
            this.style.color =  model.memo[i] == this.value ? "black" : "red";
            model.memo[i] = +this.value.replace(/\s/, '');
            show();
         });
   }
}

function show() {
   const counter = document.getElementById('counter');
   const summator = document.getElementById('summator');
   counter.value = model.counter;
   summator.value = model.summator;
   
   for (let i = 0; i < model.size; i++) 
   {
      const el = document.getElementById('a' + i);
      let oldValue = str2num(el.value);
      el.style.color = 
         model.memo[i] == 0 ? "gray" : 
         model.memo[i] == oldValue ? "black" : 
         "red";
      el.value = num2str(model.memo[i]);
      
      // set pointer
      el.nextSibling.style.display = i == model.counter ? "inline" : "none";
   }
}


function num2str(num) {
   const N = 10**A;
   return lead(num / N, 2) + ' ' + lead(num % N, A);

   function lead(num, k) {
      return ('000000000' + (num | 0)).slice(-k);
   } 
}

function str2num(str) {
   return +str.replace(/\s/, '')
}

