class MyElement extends Atom.Element {
    static get is () { return "my-element"; }
    
    get template () {
        return `
            <div>
                <h3>Hello ${this.person}</h3>
                <p>This is a custom element</p>
            </div>
        `;
    }
   
    constructor () {
        super();
        this.person = "Bob";
        this.init();
    }
}
 
customElements.define(MyElement.is, MyElement);