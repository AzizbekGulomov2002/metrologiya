var last = document.createElement('div');
function qidirish(element) {

    var name = element.value;
    console.log(name);
    var pattern = name.toLowerCase();
    var targetId = "";

    var divs = document.getElementsByClassName("card-body");
    for (var i = 0; i < divs.length; i++) {
    //   var para = divs[i].getElementsByTagName("p");
      var index = divs[i].innerText.toLowerCase().indexOf(pattern);
       last.style.color = 'black';
       if (index != -1) {
       
        last = divs[i];
        last.parentNode.scrollIntoView(true);
        last.style.color = 'red';
        break;
      }
    }
  }