const units = [new Unit('in', 'distance', {
    ft: x => x / 12,
    yd: x => x / 36,
    mi: x => x / 63360,
    mm: x => x * 25.4,
    cm: x => x * 2.54,
    m: x => x * 0.0254,
    km: x => x * 2.54E-05
}),
new Unit('ft', 'distance', {
    in: x => x * 12,
    yd: x => x / 3,
    mi: x => x / 5280,
    mm: x => x * 304.8,
    cm: x => x * 30.48,
    m: x => x * 0.3048,
    km: x => x * 0.0003048
}),
new Unit('yd', 'distance', {
    in: x => x * 36,
    ft: x => x * 3,
    mi: x => x / 1760,
    mm: x => x * 914.4,
    cm: x => x * 91.44,
    m: x => x * 0.9144,
    km: x => x * 0.0009144
}),
new Unit('mi', 'distance', {
    in: x => x * 63360,
    ft: x => x * 5280,
    yd: x => x * 1760,
    mm: x => x * 1.61E+06,
    cm: x => x * 160934,
    m: x => x * 1609.34,
    km: x => x * 1.60934
}),
new Unit('mm', 'distance', {
    in: x => x / 25.4,
    ft: x => x / 304.8,
    yd: x => x / 914.4,
    mi: x => x / 1.61E+06,
    cm: x => x * 0.1,
    m: x => x * 0.001,
    km: x => x * 1.00E-06
}),
new Unit('cm', 'distance', {
    in: x => x / 2.54,
    ft: x => x / 30.48,
    yd: x => x / 91.44,
    mi: x => x / 160934,
    mm: x => x * 10,
    m: x => x * 0.01,
    km: x => x * 1.00E-05
}),
new Unit('m', 'distance', {
    in: x => x / 0.0254,
    ft: x => x / 0.3048,
    yd: x => x / 0.9144,
    mi: x => x / 1609.34,
    mm: x => x * 1000,
    cm: x => x * 100,
    km: x => x * 0.001
}),
new Unit('km', 'distance', {
    in: x => x / 2.54E-05,
    ft: x => x / 0.0003048,
    yd: x => x / 0.0009144,
    mi: x => x / 1.60934,
    mm: x => x * 1.00E+06,
    cm: x => x * 100000,
    m: x => x * 1000
}),
new Unit('oz', 'mass', {
    lb: x => x / 16,
    microg: x => x * 2.84E+07,
    mg: x => x * 28349.50,
    g: x => x * 28.349,
    kg: x => x * 0.028349
}),
new Unit('lb', 'mass', {
    oz: x => x * 16,
    microg: x => x * 4.54E+08,
    mg: x => x * 453592,
    g: x => x * 453.592,
    kg: x => x / 2.20462
}),
new Unit('microg', 'mass', {
    oz: x => x / 2.84E+07,
    lb: x => x / 4.54E+08,
    mg: x => x * 0.001,
    g: x => x * 1.00E-06,
    kg: x => x * 1.00E-09
}),
new Unit('mg', 'mass', {
    oz: x => x / 28349.50,
    lb: x => x / 4.54E+08,
    microg: x => x * 1000,
    g: x => x * 0.001,
    kg: x => x * 1.00E-06
}),
new Unit('g', 'mass', {
    oz: x => x / 28.349,
    lb: x => x / 453.592,
    microg: x => x * 1.00E+06,
    mg: x => x * 1000,
    kg: x => x * 0.001
}),
new Unit('kg', 'mass', {
    oz: x => x * 35.274,
    lb: x => x * 2.20462,
    microg: x => x * 1.00E+09,
    mg: x => x * 1.00E+06,
    g: x => x * 1000
}),
new Unit('atm', 'preassure', {
    Torr: x => x * 760,
    b: x => x * 1.01325,
    kPa: x => x * 101.325,
    Pa: x => x * 101325,
    kgfcm2: x => x * 1.033227453,
    psi: x => x * 14.69596432
}),
new Unit('Torr', 'preassure', {
    atm: x => x / 760,
    b: x => x / 750.0616827,
    kPa: x => x / 7.500616827,
    Pa: x => x * 133.3223684,
    kgfcm2: x => x / 735.5592401,
    psi: x => x / 51.71487787
}),
new Unit('b', 'preassure', {
    atm: x => x / 1.01325,
    Torr: x => x * 750.0616827,
    kPa: x => x * 100,
    Pa: x => x * 100000,
    kgfcm2: x => x * 1.019716213,
    psi: x => x * 14.50378911
}),
new Unit('kPa', 'preassure', {
    atm: x => x / 101.325,
    Torr: x => x * 7.500616827,
    b: x => x / 100,
    Pa: x => x * 1000,
    kgfcm2: x => x / 98.0665,
    psi: x => x / 6.89475
}),
new Unit('Pa', 'preassure', {
    atm: x => x / 101325,
    Torr: x => x / 133.3223684,
    b: x => x / 100000,
    kPa: x => x / 1000,
    kgfcm2: x => x / 98066.5,
    psi: x => x / 6894.75
}),
new Unit('kgfcm2', 'preassure', {
    atm: x => x / 1.033227453,
    Torr: x => x * 735.5592401,
    b: x => x / 1.019716213,
    kPa: x => x * 98.0665,
    Pa: x => x * 98066.5,
    psi: x => x * 14.22335835
}),
new Unit('psi', 'preassure', {
    atm: x => x / 14.69596432,
    Torr: x => x * 51.71487787,
    b: x => x / 14.50378911,
    kPa: x => x * 6.89475,
    Pa: x => x * 6894.75,
    kgfcm2: x => x / 14.22335835
}),
new Unit('mW', 'power', {
    W: x => x / 1000,
    kW: x => x / 1000000,
    MW: x => x / 1000000000,
    GW: x => x / 1000000000000,
    hp: x => x / 745699.87,
    cals: x => x / 4186.8,
    ergs: x => x * 10000,
    ftlbs: x => x / 1355.817948,
    BTUs: x => x / 1055056,
    BTUh: x => x / 293.0711111
}),
new Unit('W', 'power', {
    mW: x => x * 1000,
    kW: x => x / 1000,
    MW: x => x / 1000000,
    GW: x => x / 1000000000,
    hp: x => x / 745.6998716,
    cals: x => x / 4.1868,
    ergs: x => x * 10000000,
    ftlbs: x => x / 1.355817948,
    BTUs: x => x / 1055.056,
    BTUh: x => x * 3.412141156
}),
new Unit('kW', 'power', {
    mW: x => x * 1000000,
    W: x => x * 1000,
    MW: x => x * 0.001,
    GW: x => x * 0.000001,
    hp: x => x * 1.34102209,
    cals: x => x * 238.8458966,
    ergs: x => x * 10000000000,
    ftlbs: x => x * 737.5621493,
    BTUs: x => x / 1.055056,
    BTUh: x => x * 3412.141156
}),
new Unit('MW', 'power', {
    mW: x => x * 1000000000,
    W: x => x * 1000000,
    kW: x => x * 1000,
    GW: x => x / 1000,
    hp: x => x * 1341.02209,
    cals: x => x * 238845.90,
    ergs: x => x * 10000000000000,
    ftlbs: x => x * 737562.15,
    BTUs: x => x * 947.8169879,
    BTUh: x => x * 3412141.16
}),
new Unit('GW', 'power', {
    mW: x => x * 1000000000000,
    W: x => x * 1000000000,
    kW: x => x * 1000000,
    MW: x => x * 1000,
    hp: x => x * 1341022.09,
    cals: x => x * 238845896.63,
    ergs: x => x * 10000000000000000n,
    ftlbs: x => x * 737562149.28,
    BTUs: x => x * 947816.99,
    BTUh: x => x * 3412141156.49
}),
new Unit('hp', 'power', {
    mW: x => x * 745699.87,
    W: x => x * 745.6998716,
    kW: x => x / 1.34102209,
    MW: x => x / 1341.02209,
    GW: x => x / 1341022.09,
    cals: x => x * 178.1073544,
    ergs: x => x * 7456998715.82,
    ftlbs: x => x * 550,
    BTUs: x => x / 1.414853402,
    BTUh: x => x * 2544.433222
}),
new Unit('cals', 'power', {
    mW: x => x * 4186.8,
    W: x => x * 4.1868,
    kW: x => x / 238.8458966,
    MW: x => x / 238845.90,
    GW: x => x / 238845896.63,
    hp: x => x / 178.1073544,
    ergs: x => x * 41868000,
    ftlbs: x => x * 3.088025207,
    BTUs: x => x / 251.9957963,
    BTUh: x => x * 14.28595259
}),
new Unit('ergs', 'power', {
    mW: x => x * 0.0001,
    W: x => x * 1.00E-07,
    kW: x => x * 1.00E-10,
    MW: x => x * 1.00E-13,
    GW: x => x / 10000000000000000n,
    hp: x => x / 7456998715.82,
    cals: x => x / 41868000,
    ftlbs: x => x / 13558179.48,
    BTUs: x => x * 9.48E-11,
    BTUh: x => x / 2930711.11
}),
new Unit('ftlbs', 'power', {
    mW: x => x * 1355.817948,
    W: x => x * 1.355817948,
    kW: x => x / 737.5621493,
    MW: x => x / 737562.15,
    GW: x => x / 737562149.28,
    hp: x => x / 550,
    cals: x => x / 3.088025207,
    ergs: x => x * 13558179.48,
    BTUs: x => x / 778.169371,
    BTUh: x => x * 4.626242222
}),
new Unit('BTUs', 'power', {
    mW: x => x * 1055056,
    W: x => x * 1055.056,
    kW: x => x * 1.055056,
    MW: x => x / 947.8169879,
    GW: x => x / 947816.99,
    hp: x => x * 1.414853402,
    cals: x => x * 251.9957963,
    ergs: x => x * 10550560000,
    ftlbs: x => x * 778.169371,
    BTUh: x => x * 3600
}),
new Unit('BTUh', 'power', {
    mW: x => x * 293.0711111,
    W: x => x / 3.412141156,
    kW: x => x / 3412.141156,
    MW: x => x / 3412141.16,
    GW: x => x / 3412141156.49,
    hp: x => x / 2544.433222,
    cals: x => x / 14.28595259,
    ergs: x => x * 2930711.11,
    ftlbs: x => x / 4.626242222,
    BTUs: x => x / 3600
}),
new Unit('floz', 'volume', {
    c: x => x / 8,
    pint: x => x / 16,
    quart: x => x / 32,
    gallon: x => x / 128,
    ml: x => x * 29.5735,
    L: x => x / 33.814
}),
new Unit('c', 'volume', {
    floz: x => x * 8,
    pint: x => x / 2,
    quart: x => x / 4,
    gallon: x => x / 16,
    ml: x => x * 236.588,
    L: x => x / 4.22675
}),
new Unit('pint', 'volume', {
    floz: x => x * 16,
    c: x => x * 2,
    quart: x => x / 2,
    gallon: x => x / 8,
    ml: x => x * 473.176,
    L: x => x / 2.11338
}),
new Unit('quart', 'volume', {
    floz: x => x * 32,
    c: x => x * 4,
    pint: x => x * 2,
    gallon: x => x / 4,
    ml: x => x * 946.353,
    L: x => x / 1.05669
}),
new Unit('gallon', 'volume', {
    floz: x => x * 128,
    c: x => x * 16,
    pint: x => x * 8,
    quart: x => x * 4,
    ml: x => x * 3785.41,
    L: x => x * 3.78541
}),
new Unit('ml', 'volume', {
    floz: x => x / 29.5735,
    c: x => x / 236.588,
    pint: x => x / 473.176,
    quart: x => x / 946.353,
    gallon: x => x / 3785.41,
    L: x => x / 1000
}),
new Unit('L', 'volume', {
    floz: x => x * 33.814,
    c: x => x * 4.22675,
    pint: x => x * 2.11338,
    quart: x => x * 1.05669,
    gallon: x => x / 3.78541,
    ml: x => x * 1000
})];
const input = document.getElementById('input');
const output = document.getElementById('output');
const inputSelector = document.getElementById('inputSelector');
const outputSelector = document.getElementById('outputSelector');
const controller = new ConversorController(units, input, output, inputSelector, outputSelector);