class ConversorController {
    constructor(units, input, output, inputSelector, outputSelector) {
        this.units = units;
        this.input = input;
        this.output = output;
        this.inputSelector = inputSelector;
        this.outputSelector = outputSelector;
        //default filter
        this.filterUnits('mass');
    }
    filterUnits(category) {
        const filtered = units.filter(unit => unit.category === category);
        while (this.inputSelector.firstChild) {
            this.inputSelector.removeChild(this.inputSelector.firstChild);
        }
        while (this.outputSelector.firstChild) {
            this.outputSelector.removeChild(this.outputSelector.firstChild);
        }
        filtered.forEach(unit => {
            const o = document.createElement('option');
            o.innerText = unit.name;
            const o2 = o.cloneNode(true);
            this.inputSelector.appendChild(o);
            this.outputSelector.appendChild(o2);
        });
    }
    convert() {
        const inputUnit = units.find(unit => unit.name == this.inputSelector.value);
        const outputUnit = units.find(unit => unit.name == this.outputSelector.value);
        const inputValue = Number.parseFloat(this.input.value);
        if (inputUnit === outputUnit)
            output.value = inputValue;
        const outputValue = inputUnit.convertTo(outputUnit, inputValue);
        output.value = outputValue;
    }
}
