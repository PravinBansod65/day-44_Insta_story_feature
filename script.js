// {/* <div class="story" id="0">
//                 <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
//             </div> */}

arr = [
    {
        dp: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "./assets/sk21.jpg",
      story:
        "https://images.pexels.com/photos/5380654/pexels-photo-5380654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  
    },
    {
      dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

var storiyan = document.querySelector("#storiyaan");
var clutter = ``;
arr.forEach((elem, idx) => {
  clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}">
    </div>
    `;
});

storiyan.innerHTML += clutter;

const first = document.getElementById("first");
first.addEventListener("click", () =>{
    document.querySelector("#full-screen").style.backgroundImage = `url(
        ./assets/storymine.jpg
      )`

      setTimeout(() => {
        document.querySelector("#full-screen").style.display = "none";
      }, 2000);
});



storiyan.addEventListener("click", function (e) {
  console.log(e.target.id);
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${
    arr[e.target.id].story
  })`;
  document.querySelector(".story").style.display = "none";

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
    document.querySelector(".story").style.display = "inline-block";
  }, 2500);
});
