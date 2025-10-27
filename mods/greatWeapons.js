elements.nuke = {
  tick: function(pixel) {
    if (pixel.temp >= 50) {
      alert("test");
    }

  },
  color: "#yellow",
  behaviour: behaviours.SOLID,
  reactions: {
    "heat": { "elem2": null }
  },
  burn: 50,
  category: "goodWeapons",
  state: "solid",


}
