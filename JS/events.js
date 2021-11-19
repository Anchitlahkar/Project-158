AFRAME.registerComponent("cursor-event", {
  schema: {
    selectedId: { type: "string", default: "" },
  },

  init: function () {
    // Do something when component first attached.
    this.handelMouseEntry();
    this.handelMouseLeave()
  },

  handelMouseEntry: function () {
    this.el.addEventListener("mouseenter", () => {
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
    });
  },

  handelMouseLeave: function () {
    this.el.addEventListener("mouseleave", () => {
      const {selectedId} = this.data

      if(selectedId){
        const el = document.querySelector(`#${selectedId}`)
        const id = el.getAttribute("id")

        if(id === selectedId){
          el.setAttribute("material",{
            color:"#fff",
            opacity: 0.7
          })
        }
      }
    });
  },
});
