class Tickbox {
  static init() {
    const tickboxElements = document.querySelectorAll('.tickbox');

    if (tickboxElements.length === 0) {
      return;
    }

    tickboxElements.forEach((element) => {
      const checkboxes = Array.from(
        element.querySelectorAll('input[type="checkbox"]'),
      );

      const radios = Array.from(
        element.querySelectorAll('input[type="radio"]'),
      );

      Tickbox.addAriaCheckedAttribute([...checkboxes, ...radios]);

      element.addEventListener('click', (event) => {
        const { target } = event;

        if (target.type === 'checkbox' || target.type === 'radio') {
          Tickbox.tickboxAriaCheckedAttribute(target);
        }
      });
    });
  }

  static addAriaCheckedAttribute(inputs) {
    inputs.map((input) => {
      input.setAttribute('aria-checked', input.checked);

      return input;
    });
  }

  static tickboxAriaCheckedAttribute(input) {
    const groupName = input.getAttribute('name');

    if (groupName) {
      const groupInputs = Array.from(
        document.querySelectorAll(`input[name="${groupName}"]`),
      );

      groupInputs.forEach((groupInput) => {
        groupInput.setAttribute('aria-checked', groupInput === input);
      });
    } else {
      input.setAttribute('aria-checked', input.checked);
    }
  }
}

export default Tickbox;
