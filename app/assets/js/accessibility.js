const Accessibility = {
  handleMouseDownOnce: () => {
    document.body.classList.remove('user-is-tabbing')

    window.removeEventListener('mousedown', Accessibility.handleMouseDownOnce)
    window.addEventListener('keydown', Accessibility.handleFirstTab)
  },
  handleFirstTab: (e) => {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')

      window.removeEventListener('keydown', Accessibility.handleFirstTab)
      window.addEventListener('mousedown', Accessibility.handleMouseDownOnce)
    }
  }
}

export default Accessibility