
my_div = document.getElementById("demo")

// my_div.addEventListener("click", changeName)

function changeName(){
  if (my_div.innerText !== "Peris is Amaizing")
    my_div.innerText = "Peris is Amaizing"
  else
    my_div.innerText = "Peris is Beautiful"
}

// console.log(my_div)

// shop items

sugar = 200
salt = 30
bread = 120
tissue = 50
milk = 70
Laptop = 30
Keyboard = 23
battery = 40
pizza = 50

total = 0

function checkout(...items){
  console.log(items)

  let i;
  for(i = 0; i < items.length; i++){
    total += items[i]
  }

  // items.forEach((item) => {
  //   total += item
  // })
  // console.log(total)
  return total
}

checkout(salt, sugar, milk, bread);

// console.log(checkout(salt, sugar, milk ))