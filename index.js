
const model = new Model(20);
initGUI();
show();

const clearBtn = document.getElementById('clearBtn');
const stepBtn = document.getElementById('stepBtn');

counter.addEventListener('change', () => {model.counter = counter.value; show(); } );


stepBtn.addEventListener('click', () => {model.step(); show(); } );
clearBtn.addEventListener('click', () => {model.clear(); show(); } );


function initGUI() 
{
   for (let i = 0; i < model.size; i++) 
   {
      const div = document.createElement("div");
      div.innerHTML = `<label>${('000' + i).slice(-4)} </label>` +
      `<input id="a${i}" type="text" </input>` +
      `<span id="p${i}" style="display: none"> ◄ </span>`
      memo.appendChild(div);

      div.children[1].addEventListener('change', function() {
            let i = this.id.slice(1);
            this.style.color =  model.memo[i] == this.value ? "black" : "red";
            model.toMemo(i, this.value.replace(/\s/, '')); 
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
      el.style.color = 
         model.memo[i] == "00 0000" ? "gray" : 
         model.memo[i] == el.value ? "black" : 
         "red";
      el.value = model.memo[i];
      
      // pointer position
      el.nextSibling.style.display = i == model.counter ? "inline" : "none";
   }
}


