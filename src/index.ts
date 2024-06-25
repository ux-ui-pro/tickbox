class Tickbox {
  private containerSelector: string;

  private tickboxContainers: NodeListOf<Element>;

  constructor(containerSelector: string = '.tickbox-container') {
    this.containerSelector = containerSelector;
    this.tickboxContainers = document.querySelectorAll(this.containerSelector);
  }

  public init(): void {
    if (!this.tickboxContainers.length) {
      return;
    }

    this.tickboxContainers.forEach((container) => {
      const checkboxes: HTMLInputElement[] = Array.from(container.querySelectorAll('input[type="checkbox"]'));
      const radios: HTMLInputElement[] = Array.from(container.querySelectorAll('input[type="radio"]'));

      Tickbox.addAriaCheckedAttribute([...checkboxes, ...radios]);

      container.addEventListener('click', (event) => {
        const target = event.target as HTMLInputElement;

        if (target.type === 'checkbox' || target.type === 'radio') {
          Tickbox.tickboxAriaCheckedAttribute(target, container);
        }
      });
    });
  }

  private static addAriaCheckedAttribute(inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
      input.setAttribute('aria-checked', input.checked.toString());
    });
  }

  private static tickboxAriaCheckedAttribute(input: HTMLInputElement, container: Element): void {
    const groupName = input.getAttribute('name');

    if (groupName) {
      const groupInputs = container.querySelectorAll(`input[name="${groupName}"]`) as NodeListOf<HTMLInputElement>;

      groupInputs.forEach((groupInput) => {
        groupInput.setAttribute('aria-checked', (groupInput === input).toString());
      });
    } else {
      input.setAttribute('aria-checked', input.checked.toString());
    }
  }
}

export default Tickbox;
