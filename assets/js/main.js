// SmallNav contains the small navigation setup
class SmallNav {
  // Menu element
  menu
  // Open button element
  openButton
  // Close button element
  closeButton

  // openMenu closes the menu
  openMenu(self) {
    self.menu.className = "menu small visible"
    document.body.style.overflow = "hidden"
  }

  // closeMenu closes the menu
  closeMenu(self) {
    self.menu.className = "menu small hidden"
    document.body.style.overflow = ""
  }

  // Setup the menu handler and element
  constructor(menuId, openId, closeId) {
    // Setup the menu
    this.menu = document.querySelector(menuId)

    // Setup the open button
    this.openButton = document.querySelector(openId)
    this.openButton.onclick = () => this.openMenu(this)

    // Setup the close button
    this.closeButton = document.querySelector(closeId)
    this.closeButton.onclick = () => this.closeMenu(this)

    // Setup the links in the menu
    for (let elem of this.menu.querySelectorAll(".link")) {
      elem.onclick = () => this.closeMenu(this)
    }
  }
}

// Initialize the elements
new SmallNav("#menu", "#menu-open", "#menu-close")
