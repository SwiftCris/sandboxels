elements.nuke = {
  color: "#FFFF00",
  behavior: [
    "XX|EX:10>ash|XX",
    "XX|XX|XX",
    "M2|M1 AND EX:10>ASH|M2",
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
