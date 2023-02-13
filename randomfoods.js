let  favoriteFoods=["pizza", "ice cream"]
function randomFood(){
  let randomIndex = Math.floor(Math.random() * favoriteFoods.length);
  console.log(favoriteFoods[randomIndex]);
}
randomFood();
