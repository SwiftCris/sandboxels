elements.nuke = {
  color: "#FFFF00",
  behavior: behavior.WALL,
  reactions: {
    "heat": { "elem2": null }
  },
  burn: 50,
  category: "goodWeapons",
  state: "solid",
  tick: function(pixel) {
    if (pixel.temp >= 50) {
      alert("test");
    }

  }


};
