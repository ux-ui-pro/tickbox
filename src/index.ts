class TickBox {
  private containerSelector: string;

  private tickBoxContainers: NodeListOf<Element>;

  constructor(containerSelector: string = '.tickbox-container') {
    this.containerSelector = containerSelector;
    this.tickBoxContainers = document.querySelectorAll(this.containerSelector);
  }

  public init(): void {
    if (!this.tickBoxContainers.length) {
      return;
    }

    this.tickBoxContainers.forEach((container) => {
      const checkboxes: HTMLInputElement[] = Array.from(
          container.querySelectorAll('input[type="checkbox"]')
      );
      const radios: HTMLInputElement[] = Array.from(
          container.querySelectorAll('input[type="radio"]')
      );

      TickBox.addAriaCheckedAttribute([...checkboxes, ...radios]);

      container.addEventListener('click', (event) => {
        const target = event.target as Element;

        if (
            target instanceof HTMLInputElement &&
            (target.type === 'checkbox' || target.type === 'radio')
        ) {
          TickBox.tickBoxAriaCheckedAttribute(target, container);
        }
      });
    });
  }

  private static addAriaCheckedAttribute(inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
      input.setAttribute('aria-checked', input.checked.toString());
    });
  }

  private static tickBoxAriaCheckedAttribute(
      input: HTMLInputElement,
      container: Element
  ): void {
    const groupName = input.getAttribute('name');

    if (groupName) {
      const groupInputs = container.querySelectorAll(
          `input[name="${groupName}"]`
      ) as NodeListOf<HTMLInputElement>;

      groupInputs.forEach((groupInput) => {
        groupInput.setAttribute('aria-checked', groupInput.checked.toString());
      });
    } else {
      input.setAttribute('aria-checked', input.checked.toString());
    }
  }
}

export default TickBox;
