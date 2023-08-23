function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
class $4fa36e821943b400$var$Tickbox {
    constructor(){
        this.tickboxElements = document.querySelectorAll(".tickbox");
        this.tickboxElements.forEach((element)=>{
            const checkboxes = element.querySelectorAll('input[type="checkbox"]');
            const radios = element.querySelectorAll('input[type="radio"]');
            this.addAriaCheckedAttribute([
                ...checkboxes,
                ...radios
            ]);
            element.addEventListener("click", (event)=>{
                const target = event.target;
                if (target.type === "checkbox" || target.type === "radio") this.tickboxAriaCheckedAttribute(target);
            });
        });
    }
    addAriaCheckedAttribute(inputs) {
        inputs.forEach((input)=>{
            input.setAttribute("aria-checked", input.checked);
        });
    }
    tickboxAriaCheckedAttribute(input) {
        const groupName = input.getAttribute("name");
        if (groupName) {
            const groupInputs = document.querySelectorAll(`input[name="${groupName}"]`);
            groupInputs.forEach((groupInput)=>{
                groupInput.setAttribute("aria-checked", groupInput === input);
            });
        } else input.setAttribute("aria-checked", input.checked);
    }
}
var $4fa36e821943b400$export$2e2bcd8739ae039 = $4fa36e821943b400$var$Tickbox;


//# sourceMappingURL=index.js.map
