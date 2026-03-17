function toggleAI(){
 let box=document.getElementById('aiBox');
 box.style.display= box.style.display==='block'?'none':'block';
}

function aiInput(e){
 if(e.key==='Enter'){
   let val=e.target.value.toLowerCase();
   let res="🤔";
   if(val.includes('games')){
     res="Showing games 🎮";
   }
   document.getElementById('aiChat').innerText=res;
   e.target.value="";
 }
}