class $cf838c15c8b009ba$var$Tickbox {
    static init() {
        const tickboxElements = document.querySelectorAll(".tickbox");
        if (tickboxElements.length === 0) return;
        tickboxElements.forEach((element)=>{
            const checkboxes = Array.from(element.querySelectorAll('input[type="checkbox"]'));
            const radios = Array.from(element.querySelectorAll('input[type="radio"]'));
            $cf838c15c8b009ba$var$Tickbox.addAriaCheckedAttribute([
                ...checkboxes,
                ...radios
            ]);
            element.addEventListener("click", (event)=>{
                const target = event.target;
                if (target.type === "checkbox" || target.type === "radio") $cf838c15c8b009ba$var$Tickbox.tickboxAriaCheckedAttribute(target);
            });
        });
    }
    static addAriaCheckedAttribute(inputs) {
        inputs.map((input)=>{
            input.setAttribute("aria-checked", input.checked);
        });
    }
    static tickboxAriaCheckedAttribute(input) {
        const groupName = input.getAttribute("name");
        if (groupName) {
            const groupInputs = Array.from(document.querySelectorAll(`input[name="${groupName}"]`));
            groupInputs.forEach((groupInput)=>{
                groupInput.setAttribute("aria-checked", groupInput === input);
            });
        } else input.setAttribute("aria-checked", input.checked);
    }
}
var $cf838c15c8b009ba$export$2e2bcd8739ae039 = $cf838c15c8b009ba$var$Tickbox;


export {$cf838c15c8b009ba$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.module.js.map
