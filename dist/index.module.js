class $643fcf18b2d2e76f$var$Tickbox {
    containerSelector;
    tickboxContainers;
    constructor(containerSelector = ".tickbox-container"){
        this.containerSelector = containerSelector;
        this.tickboxContainers = document.querySelectorAll(this.containerSelector);
    }
    init() {
        if (!this.tickboxContainers.length) return;
        this.tickboxContainers.forEach((container)=>{
            const checkboxes = Array.from(container.querySelectorAll('input[type="checkbox"]'));
            const radios = Array.from(container.querySelectorAll('input[type="radio"]'));
            $643fcf18b2d2e76f$var$Tickbox.addAriaCheckedAttribute([
                ...checkboxes,
                ...radios
            ]);
            container.addEventListener("click", (event)=>{
                const target = event.target;
                if (target.type === "checkbox" || target.type === "radio") $643fcf18b2d2e76f$var$Tickbox.tickboxAriaCheckedAttribute(target, container);
            });
        });
    }
    static addAriaCheckedAttribute(inputs) {
        inputs.forEach((input)=>{
            input.setAttribute("aria-checked", input.checked.toString());
        });
    }
    static tickboxAriaCheckedAttribute(input, container) {
        const groupName = input.getAttribute("name");
        if (groupName) {
            const groupInputs = container.querySelectorAll(`input[name="${groupName}"]`);
            groupInputs.forEach((groupInput)=>{
                groupInput.setAttribute("aria-checked", (groupInput === input).toString());
            });
        } else input.setAttribute("aria-checked", input.checked.toString());
    }
}
var $643fcf18b2d2e76f$export$2e2bcd8739ae039 = $643fcf18b2d2e76f$var$Tickbox;


export {$643fcf18b2d2e76f$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.module.js.map
