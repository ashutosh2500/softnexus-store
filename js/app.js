const cursor = document.getElementById('cursor');
const ring = document.getElementById('ring');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX+'px';
  cursor.style.top = e.clientY+'px';
  ring.style.left = (e.clientX-15)+'px';
  ring.style.top = (e.clientY-15)+'px';
});

let apps = [
 {name:"Calculator",cat:"tools"},
 {name:"Game Hub",cat:"games"}
];

function render(list){
  appGrid.innerHTML="";
  list.forEach(app=>{
    appGrid.innerHTML+=`
    <div class="card">
      <h3>${app.name}</h3>
    </div>`;
  });
}

function loadApps(){
  render(apps);
}

function searchApps(){
  let v = search.value.toLowerCase();
  render(apps.filter(a=>a.name.toLowerCase().includes(v)));
}

function setCat(btn,cat){
  document.querySelectorAll("button").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  if(cat==='all') return loadApps();
  render(apps.filter(a=>a.cat===cat));
}

loadApps();