
class Router {

  constructor() {
    this.route = {};
  }
  
  add(routeName, link) {
    this.route[routeName] = link
  }
 
  route(event) {
    event = event || window.event
    event.preventDefault()
    
    
    window.history.pushState({}, "", event.target.href)
    
    this.handle()
  }
  

  handle() {
    const { pathname } = window.location
    const route = this.route[pathname] || this.route[404]
    
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
    
  }
  
}

export { Router };