let menu = document.querySelector("#menu-bars");
// let header = document.querySelector('header');

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     header.classList.toggle('active');
// }

// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     header.classList.remove('active');
// }

// Der kümmert sich um die Erstellung von zwei animierten Cursors auf der Webseite.
//Der Cursor besteht aus zwei Elementen mit den Klassen cursor-1 und cursor-2,
//die sich beim Bewegen der Maus auf der Webseite folgen.

let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

//Das window.onmousemove Ereignis wird verwendet, um die Position der beiden Cursor-Elemente an die
//Mausposition anzupassen. Wenn der Mauszeiger über einem Link schwebt,
//werden beide Cursor-Elemente durch das Hinzufügen der Klasse active animiert.
//Wenn der Mauszeiger den Link verlässt, wird die Klasse active von beiden Cursor-Elementen entfernt.

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
};

document.querySelectorAll("a").forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };

  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});
