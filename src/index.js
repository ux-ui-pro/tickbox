class Tickbox {
	constructor() {
		this.tickboxElements = document.querySelectorAll('.tickbox')

		this.tickboxElements.forEach(element => {
			const checkboxes = element.querySelectorAll('input[type="checkbox"]')
			const radios = element.querySelectorAll('input[type="radio"]')

			this.addAriaCheckedAttribute([...checkboxes, ...radios])

			element.addEventListener('click', event => {
				const target = event.target

				if (target.type === 'checkbox' || target.type === 'radio') {
					this.tickboxAriaCheckedAttribute(target)
				}
			})
		})
	}

	addAriaCheckedAttribute(inputs) {
		inputs.forEach(input => {
			input.setAttribute('aria-checked', input.checked)
		})
	}

	tickboxAriaCheckedAttribute(input) {
		const groupName = input.getAttribute('name')

		if (groupName) {
			const groupInputs = document.querySelectorAll(`input[name="${groupName}"]`)

			groupInputs.forEach(groupInput => {
				groupInput.setAttribute('aria-checked', groupInput === input)
			})
		} else {
			input.setAttribute('aria-checked', input.checked)
		}
	}
}

export default Tickbox