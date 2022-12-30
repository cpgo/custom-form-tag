export class SearchGroup extends HTMLFormElement   {
  $(selector : string) {
    return this.shadowRoot && this.shadowRoot.querySelector(selector)
  }

  constructor() {
    super();
    this.addEventListener('submit', this.mySubmit);
  }

  set op(value: string){
    this._op = value
    if (!value) return

    this.setAttribute('op', value)
  }

  get op() {
    const attr = this.getAttribute('op')
    if (!attr) {
      throw new Error("op is required");

    }
    return attr
  }

  mySubmit(e : Event) {
    e.preventDefault()
    console.log('mySubmit was called');
    const formData = new FormData(this)
    formData.append("op", this.op)
    const convertedFormEntries = Array.from(
      formData,
      ([key, value]) => (
        [key, typeof value === 'string' ? value : value.name]
      ),
    );
    const params = new URLSearchParams(convertedFormEntries)
    console.log(params)

    if (!e.currentTarget) {
      throw new Error("No event target");

    }

    const target = e.currentTarget as HTMLFormElement
    target.submit()
  }

  connectedCallback() {
    console.log('Custom form element added to page.');
  }
}

