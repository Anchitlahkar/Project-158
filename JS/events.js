AFRAME.registerComponent("cursor-event", {
  schema: {
    selectedId: { type: "string", default: "" },
  },

  init: function () {
    // Do something when component first attached.

    this.handelMouseEntry();
    this.handelMouseLeave();
    this.handelClick();
  },

  handleComicList: function () {
    const id = this.el.getAttribute("id");
    const comicList = [
      "eternals",
      "im_captain_america",
      "iron_man_annual",
      "the_death_of_doctor_strange",
    ];

    if (comicList.includes(id)) {
      const placesContainer = document.querySelector("#comic-container");

      placesContainer.setAttribute("cursor-event", {
        selectedId: id,
      });

      this.el.setAttribute("material", {
        color: "blue",
        opacity: 1,
      });
    }
  },

  handelMouseEntry: function () {
    entityEL = document.querySelector("#comic-container");
    const { state } = entityEL.getAttribute("comics");
    this.el.addEventListener("mouseenter", () => {
      this.handleComicList();
    });
  },

  handelMouseLeave: function () {
    this.el.addEventListener("mouseleave", () => {
      const { selectedId } = this.data;

      if (selectedId) {
        const el = document.querySelector(`#${selectedId}`);
        const id = el.getAttribute("id");

        if (id === selectedId) {
          el.setAttribute("material", {
            color: "#fff",
            opacity: 0.7,
          });
        }
      }
    });
  },

  handelClick: function () {
    this.el.addEventListener("click", (e) => {
      var id = this.el.getAttribute("id");

      const comicList = [
        "eternals",
        "im_captain_america",
        "iron_man_annual",
        "the_death_of_doctor_strange",
      ];

      if (comicList.includes(id)) {
        console.log(id);

        // making the comics info visible
        entityEL = document.querySelector("#comic-text");
        entityEL.setAttribute("visible", true);
        entityEL.setAttribute("position", { x: 1, y: -0.53751, z: -11.2474 });

        // hiding rest of the entity
        restEntity = document.querySelector("#comic-container");
        restEntity.setAttribute("visible", false);

        // setting the comic img and the img border in the info bar
        var img = document.createElement("a-image");
        img.setAttribute("src", `./images/${id}.jpg`);
        img.setAttribute("id", id);
        img.setAttribute("position", { x: -8.60633, y: -0.13182, z: -9.79364 });
        img.setAttribute("scale", { x: 4.9, y: 5.1, z: 1 });

        var border = document.createElement("a-plane");
        border.setAttribute("position", {
          x: -8.60633,
          y: -0.13182,
          z: -9.8,
        });
        border.setAttribute("scale", { x: 5.2, y: 5.4, z: 1 });
        border.setAttribute("material",{color:"#000"})



        scene = document.querySelector("#scene");
        scene.appendChild(img);
        scene.appendChild(border);

        // reseting the camera position
        cam = document.querySelector("#main_cam");
        cam.setAttribute("position", { x: 0, y: 1.6, z: 0 });
        cam.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      }
    });
  },
});
