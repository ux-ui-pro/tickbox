function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
class $4fa36e821943b400$var$Tickbox {
    static init() {
        const tickboxElements = document.querySelectorAll(".tickbox");
        if (tickboxElements.length === 0) return;
        tickboxElements.forEach((element)=>{
            const checkboxes = Array.from(element.querySelectorAll('input[type="checkbox"]'));
            const radios = Array.from(element.querySelectorAll('input[type="radio"]'));
            $4fa36e821943b400$var$Tickbox.addAriaCheckedAttribute([
                ...checkboxes,
                ...radios
            ]);
            element.addEventListener("click", (event)=>{
                const target = event.target;
                if (target.type === "checkbox" || target.type === "radio") $4fa36e821943b400$var$Tickbox.tickboxAriaCheckedAttribute(target);
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
var $4fa36e821943b400$export$2e2bcd8739ae039 = $4fa36e821943b400$var$Tickbox;


//# sourceMappingURL=index.js.map
