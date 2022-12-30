export class SearchGroup extends HTMLFormElement   {
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
}

