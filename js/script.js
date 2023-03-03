const container = document.getElementById('container')

const projectList = [
"3d-boxes",
"animated-countdown",
"animated-navigation",
"background-slider",
"blurry-loading",
"button-ripple-effect",
"catch-the-insect",
"checkbox-animation",
"content-placeholder",
"custom-slider",
"dad-jokes",
"double-click-heart",
"drag-n-drop",
"drawing-app",
"drink-water",
"event-keycodes",
"expanding-cards",
"faq-collapse",
"form-wave-animation",
"github-profiles",
"hidden-search",
"hoverboard",
"image-carousel",
"increment-counter",
"kinetic-loader",
"mobile-navigation",
"mobile-tab-navigation",
"movie-app",
"notes-app",
"password-generator",
"password-strength-test",
"poke",
"progress",
"quiz-app",
"random-image-feed",
"rondom-choice-picker",
"rotating-navigation",
"scroll-animation",
"sound-board",
"split-landing-page",
"sticky-navigation",
"survey-ui-design",
"testimonial-box",
"text-typing-effect",
"theme-clock",
"toast-notification",
"todo-list",
"user-filter",
"verify-account-ui",
"vertical-slider"
]

console.log(projectList.length)

for(let i = 0 ; i < projectList.length ; i++ ){
    const a = document.createElement('a')
    a.classList.add('container-card')
    a.style.backgroundImage = `url('all/${projectList[i]}/${projectList[i]}.jpg')`
    a.style.backgroundSize = "cover"
    a.innerHTML = `<h4>${capitalizeWords(projectList[i].replaceAll('-', ' '))}</h4>`
    a.href = `all/${projectList[i]}/index.html`
    a.target = '_blank'
    container.appendChild(a)
}

function capitalizeWords(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }