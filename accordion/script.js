const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("open");

    items.forEach((others) => {
      if (others !== this) others.classList.remove("open");
    });
  });
});
