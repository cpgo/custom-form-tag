const options = {duration: 300, iterations: 5, easing: 'ease-in-out'}
const keyframes = [
  {opacity: 1.0, blur: '0px', transform: 'rotate(0deg)'},
  {opacity: 0.7, blur: '2px', transform: 'rotate(360deg)'},
  {opacity: 1.0, blur: '0px', transform: 'rotate(0deg)'},
]

const template = document.createElement('template')
template.innerHTML = `
  <slot></slot>
`;


customElements.define('search-group', class SuperSpan extends HTMLFormElement   {
  $(selector) {
    return this.shadowRoot && this.shadowRoot.querySelector(selector)
  }

  constructor() {
    super();
    this.addEventListener('submit', this.mySubmit);
  }

  set op(value){
    this._op = value
    this.setAttribute('op', value)
  }

  get op(){
    return this.getAttribute('op')
  }

  mySubmit(e) {
    e.preventDefault()
    console.log('mySubmit was called');
    const formData = new FormData(this)
    formData.append("op", this.op)
    const params = new URLSearchParams(formData)
    console.log(params)
    e.target.submit()
  }

  connectedCallback() {
    console.log('Custom form element added to page.');
  }

  connectedCallback() {
  }
}, { extends: 'form' });

customElements.define('search-input', class SuperSpan extends HTMLInputElement {

  $(selector) {
    return this.shadowRoot && this.shadowRoot.querySelector(selector)
  }


constructor() {
	super();
}


  connectedCallback() {
    console.log(this.parentElement.getAttribute("op"))

  }

}, { extends: 'input' });
