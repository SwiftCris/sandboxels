elements.nuke = {
  color: "#FFFF00",
  behavior: [
    "XX|EX:20>plasma|XX",
    "XX|XX|XX",
    "M2|M1 AND EX:70>plasma, plasma, plasma, plasma, ash|M2",
  ],
  reactions: {
    "heat": { "elem2": null },
  },
  burn: 50,
  category: "goodWeapons",
  state: "solid",
  tick: function(pixel) {
    if (pixel.temp >= 50) {
      explodeAt(pixel.x, pixel.y, 10, "fire");

      console.log("test");

    }

  }


};
