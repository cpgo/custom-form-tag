export class SearchInput extends HTMLInputElement {
  constructor() {
    super();
    this.baseName = this.name
    this.name = `${this.baseName}[value]`
    this.insert()
  }

  get op() {
    const attr = this.getAttribute('op')
    if (!attr) {
      throw new Error("op is required");

    }
    return attr
  }


  insert() {
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = `${this.baseName}[op]`
    input.value = this.op
    this.insertAdjacentElement("afterend", input)
  }

}
