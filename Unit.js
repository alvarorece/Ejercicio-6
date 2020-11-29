class Unit {
    constructor(name, category, converters) {
        this.name = name;
        this.category = category;
        this.converters = converters;
    }
    convertTo(unit, value) {
        return this.converters[unit.name](value);
    }
}
