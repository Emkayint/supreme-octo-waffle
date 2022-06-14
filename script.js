
my_div = document.getElementById("demo")

// my_div.addEventListener("click", changeName)

function changeName(){
  if (my_div.innerText !== "Peris is Amaizing")
    my_div.innerText = "Peris is Amaizing"
  else
    my_div.innerText = "Peris is Beautiful"
}

console.log(my_div)