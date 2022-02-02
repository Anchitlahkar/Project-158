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
      "im-captiain-america",
      "iron-man-annual",
      "the-death-of-doctor-strange",
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
        "im-captiain-america",
        "iron-man-annual",
        "the-death-of-doctor-strange",
      ];

      if (comicList.includes(id)) {
        console.log(id);

        entityEL = document.querySelector("#comic-text");
        entityEL.setAttribute("visible", true);
        entityEL.setAttribute("position", { x: 1, y: -0.53751, z: -11.2474 });

        restEntity = document.querySelector("#comic-container");
        restEntity.setAttribute("visible", false);
      }

      id = "";
    });
  },
});
