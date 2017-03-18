window.Atom = window.Atom || {};
 
window.Atom.Element = class extends HTMLElement {
    constructor () {
        super();
       
        if (this.constructor.template) {
            this.attachShadow({ mode: "open" });
            this.shadowRoot.innerHTML = this.constructor.template;
        }
    }
   
    init () {
         if (this.template) {
            this.attachShadow({ mode: "open" });
            this.shadowRoot.innerHTML = this.template;
        }
    }
   
    connectedCallback () {
    }
   
    disconnectedCallback () {
    }
   
    attributeChangedCallback (attrName, oldVal, newVal) {
    }
}