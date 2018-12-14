const texts = [
    "<a href = 'https://solar-substance.glitch.me/' target = '_blank'>Box Model Example</a><br><a href = 'http://octhomework.glitch.me/' target = '_blank'>jQuery Practice</a><br><a href = 'https://saetbyeolkwon.github.io/responsiveWeb/' target = '_blank'>Responsive Web1</a><br><a href = 'https://saetbyeolkwon.github.io/Bomb-web/' target = '_blank'>Responsive Web2</a><br><a href = 'http://peopleinspace.me' target = '_blank'>Single Serving</a>"
]

let index = 0;

  $(Document).click(function(){
    console.log(index)
    $("h1").hide()
    $("h2").hide()
    // $("h2").fadeOut("slow")
    $("h2").fadeIn(1000)
    $("h2").html(texts[index]).css("font-size","80px").css("line-height","120px")
    // let back = ["red","blue","white"];
    // let rand = back[Math.floor(Math.random() * back.length)]
   let r = Math.floor(Math.random() * 256)
   let g = Math.floor(Math.random() * 256)
   let b = Math.floor(Math.random() * 256)
    $("body").css("background-color","rgb(" + r + "," + g + "," + b + ")")
    index++

    if(index > 1){
        index = 0
    }
})
