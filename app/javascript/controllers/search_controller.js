import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search"
export default class extends Controller {

  static targets = ["list", "input", "form"]

  connect() {
  }

  hints() {
    let url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    console.log(url) 
    fetch(url, {headers: {"Accept": "text/plain" }})
    .then(response => response.text())
    .then(data => this.listTarget.outerHTML = data)    
  }
}
