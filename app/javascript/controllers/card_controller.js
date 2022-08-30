import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="card"
export default class extends Controller {
  
  static targets = ["form", "button", "card"]
  connect() {
    console.log(this.buttonTarget.outerHTML)
    console.log(this.formTarget.outerHTML)
  }

  visible() {
    this.formTarget.classList.toggle("d-none")
  }

  update(event) {
    event.preventDefault()

    let url = this.formTarget.action
    fetch(url, {method: "PATCH", headers: { "Accept": "text/plain"}, body: new FormData(this.formTarget)})
    .then(response => response.text())
    .then(data => this.cardTarget.outerHTML = data)
  }
}
