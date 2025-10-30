elements.nuke = {
  color: "#FFFF00",
  behavior: [
    "XX|EX:20>plasma|XX",
    "XX|XX|XX",
    "M2|M1 AND EX:70>plasma,plasma,plasma,plasma,ash|M2",
  ],
  reactions: {
    "heat": { "elem2": null },
  },
  burn: 50,
  category: "goodWeapons",
  state: "solid",
  tick: function(pixel) {
    if (pixel.temp >= 50) {
      explodeAt(pixel.x, pixel.y, 5, "pasma");
       
      console.log("test");

    }

  }


};

elements.bullet_left = {
  color: "#FFFFFF",
  behavior: [
    "XX|XX|XX",
    "M1 AND EX:10>gunpowder,heat|XX|XX",
    "XX|XX|XX"
  ],
  category: "pistol",
  state: "solid"
}
elements.pistol = {
  color: "#FFFFFF",
  behavior: [
    "XX|XX|XX",
    "XX|LB:>bullet_left|XX",
    "XX|M1 AND CH:1>ash|XX",
  ],
  category: "pistol",
  state: "solid",
  tick: function(pixel) {

    releaseElement(pixel, "bullet_left");
  }
}

elememts.test = {
 color = "#FFFFFF",
 behavior: [
 "XX|XX|XX",
 "XX|XX|Xx"
 "XX|m1|XX"

 ],
 category: "goodWeapons",
 state: "solid",
 tick: function(pixel) {
  pixel.y += 1;
 }

}
