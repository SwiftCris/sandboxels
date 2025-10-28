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
    "M1 AND EX:10>gunpowder|XX|XX",
    "XX|XX|Xx"
  ],
  category: "pistol",
  state: "solid",
}
