//Custom JS for Assignment 2
// carousel JS
const carouselBooks = document.querySelector("#trilogy");

const carousel = new bootstrap.Carousel(carouselBooks, {
    interval: 3200,
    wrap: true,
});

// Tab JS (from the bootstrap document site)
const triggerTabList = document.querySelectorAll('#sectionTab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)
  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})
