export class SearchInput extends HTMLInputElement {

  $(selector) {
    return this.shadowRoot && this.shadowRoot.querySelector(selector)
  }


constructor() {
	super();
}


  connectedCallback() {
    console.log(this.parentElement.getAttribute("op"))

  }

}
