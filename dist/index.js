
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $a196c1ed25598f0e$export$2e2bcd8739ae039; });
class $a196c1ed25598f0e$var$Tickbox {
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
            $a196c1ed25598f0e$var$Tickbox.addAriaCheckedAttribute([
                ...checkboxes,
                ...radios
            ]);
            container.addEventListener("click", (event)=>{
                const target = event.target;
                if (target.type === "checkbox" || target.type === "radio") $a196c1ed25598f0e$var$Tickbox.tickboxAriaCheckedAttribute(target, container);
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
var $a196c1ed25598f0e$export$2e2bcd8739ae039 = $a196c1ed25598f0e$var$Tickbox;


//# sourceMappingURL=index.js.map
