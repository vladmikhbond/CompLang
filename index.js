
const model = new Model(20);
initGUI();
show();

const clearBtn = document.getElementById('clearBtn');
const stepBtn = document.getElementById('stepBtn');

stepBtn.addEventListener('click', () => {model.step(); show(); } );
clearBtn.addEventListener('click', () => {model.clear(); show(); } );


function initGUI() 
{

   for (let i = 0; i < model.size; i++) 
   {
      // label
      const label = document.createElement("label");
      label.innerHTML = ('000' + i).slice(-4) + '. ';
      // input
      const input = document.createElement("input");
      input.type = 'text';   
      input.id = 'a' + i;
      input.onchange = function() {
         let i = this.id.slice(1);
         model.memo[i] = this.value; 
         this.style.color = this.value == "00 0000" ? "lightgray" : "black";
      }
      // div
      const div = document.createElement("div");
      div.appendChild(label);
      div.appendChild(input);
      memo.appendChild(div);
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
      el.value = model.memo[i];
      el.className = i == model.counter ? "sel" : "";
      el.style.color = model.memo[i] == "00 0000" ? "lightgray" : "black";
   }
}


