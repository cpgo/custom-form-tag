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

customElements.define('search-group', class SuperSpan extends HTMLElement {

  $(selector) {
    return this.shadowRoot && this.shadowRoot.querySelector(selector)
  }

  constructor() {
    super()
    this.shine = this.shine.bind(this)
    const root = this.attachShadow({mode: 'open'})
          root.appendChild(template.content.cloneNode(true))
    // this.addEventListener('click', this.shine)
    // this.addEventListener('mouseover', this.shine)
    this.querySelectorAll("search-input").forEach(child => console.log(child));
  }

  connectedCallback() {
    // const slot = this.$('slot')
    // const [node] = slot.assignedNodes()
    // this.setAttribute('aria-label', node.textContent)
    // node.textContent = '⭐️'
  }

  shine(event) {
    this.$('span').animate(keyframes, options)
  }
});


// class TB extends HTMLInputElement {
//   static get observedAttributes() { return ['value'] }

//   constructor() {
//       super()
//       this.addEventListener( 'input', () => this.setAttribute( 'value', super.value ) )
//   }

//   attributeChangedCallback(name, oldValue, newValue) {
//       this.value = newValue
//   }

//   get value() { return super.value }

//   set value( val ) {
//       super.value = val
//       if ( val != this.getAttribute( 'value' ) )
//           this.setAttribute( 'value', val )
//   }
// }


// customElements.define( 'search-input', TB, { extends: 'input' } )




customElements.define('search-input', class SuperSpan extends HTMLInputElement {

  $(selector) {
    return this.shadowRoot && this.shadowRoot.querySelector(selector)
  }


constructor() {
	super();
}


  connectedCallback() {
    console.log(this)
    // const slot = this.$('slot')
    // const [node] = slot.assignedNodes()

  }

  shine(event) {
    this.$('span').animate(keyframes, options)
  }
}, { extends: 'input' });
