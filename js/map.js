
for (let i = 0; i <= 13; i++) {
    showBlockInfoAndColor(`block_${i}`);
  }
  
  
  
  function showBlockInfoAndColor(idBlock) {
    let draggable = document.getElementById(idBlock);
    let moveBlockMain = document.getElementById('moveBlockMain');
    let openBlock = document.getElementById('openBlock');
    var timer
  
    draggable.onmousemove = function (event) {
      // clearTimeout(timer);
  
      let mouseX = event.clientX - moveBlockMain.getBoundingClientRect().left - 210;
      let mouseY = event.clientY - moveBlockMain.getBoundingClientRect().top - 165;
  
      $(".fil0").removeClass('showColorBlock');
      $(this).addClass('showColorBlock');
  
      $(".info_block__showMouse").show()
      $(".info_block__showMouse").css({
        "left": mouseX + "px",
        "top": mouseY + "px",
        "z-index": "9999"
      })
    };
  
    openBlock.onmouseenter = function (event) {
      // clearTimeout(timer);
      $(".info_block__showMouse").show();
    };
  
    draggable.onmouseleave = function () {
      // let screenWidth = window.innerWidth;
      // if (screenWidth <= 425) {
        $(".info_block__showMouse").hide()
        $(".fil0").removeClass('showColorBlock');
      // } 
      // else {
      //   timer = setTimeout(function () {
      //     $(".info_block__showMouse").hide()
      //     $(".fil0").removeClass('showColorBlock');
      //   }, 5000);
      // }
    }
  }