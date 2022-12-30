export class SearchInput extends HTMLInputElement {

  $(selector: string) {
    return this.shadowRoot && this.shadowRoot.querySelector(selector)
  }


constructor() {
	super();
}

}
