var picture = document.createElement ("img")
picture.src = "https://novoboi.ru/download_img.php?dimg=20542&raz=1366x768"
document.body.appendChild (picture)
picture.height = "768"
picture.width = "1366"
var btn = document.createElement ("button")
document.body.appendChild (btn)
btn.innerHTML = "Нажми для волшебства :)"
this.btn.onclick = function (event) {
function myStar (){
  this.elem = document.createElement('img')
  document.body.appendChild(this.elem)
  this.elem.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/200px-Full_Star_Yellow.svg.png"
  this.elem.style = `
    position: fixed;
    display:block;
    transition:all 0.5s;
    width: 50px;
  `
  this.move = function(){
    var x = Math.random()* window.innerWidth
    var y = Math.random()* window.innerHeight
    this.elem.style.transform = Math.random()*360
    this.elem.style.top = y+"px"
    this.elem.style.left = x+"px"
    console.log(this.elem.style.top)
  }
  this.pass = function(num){
    num = num ? num : 10
    var self = this
    for (var i=1; i<num; i++){
      var x=(function(n){
        return function(){
          setTimeout(
            function(){
              self.move()
            }, 500 * n
          )
        }
      })(i)
      x()
    }
  }
}
var stars = []
stars.push(new myStar())
stars[0].pass(1000)
}
