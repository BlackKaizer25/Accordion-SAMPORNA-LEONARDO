const box = document.getElementsByClassName('container');
var coll;

for (coll = 0; coll < box.length; coll++){
    box[coll].addEventListener('click', function () {
        this.classList.toggle('active')
      })
}