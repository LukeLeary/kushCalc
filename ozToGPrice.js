// Constants
const GRAMS_PER_OUNCE = 28.35;
const PRICE = 12.5;

//from html inputs
const input = {
    grams: document.getElementById('grams'),
    ounces: document.getElementById('ounces'),
    joints: document.getElementById('joints'),
    price: document.getElementById('price'),
    numOfJ: document.getElementById('numOfJ'),
    unit: document.getElementById('unitSelect')
};

// Get joint amount based on selected unit
const getJointAmount = () => {
    const value = Number(input.numOfJ.value);
    return input.unit.value === 'oz' ? value * GRAMS_PER_OUNCE : value;
};

// Calculate all values from a given source value and type
const calculateValues = (sourceValue, sourceType) => {
    const jointAmount = getJointAmount();
    let grams;

    switch(sourceType) {
        case 'grams':
            grams = sourceValue;
            break;
        case 'ounces':
            grams = sourceValue * GRAMS_PER_OUNCE;
            break;
        case 'joints':
            grams = sourceValue * jointAmount;
            break;
        case 'price':
            grams = sourceValue / PRICE;
            break;
    }

    return {
        //these properties are then added under the values constant in the update inputs function
        grams: grams,
        ounces: grams / GRAMS_PER_OUNCE,
        joints: grams / jointAmount,
        price: grams * PRICE
    };
};

// Update all other inputs based on the source input
const updateInputs = (sourceValue, sourceType) => {
    const values = calculateValues(sourceValue, sourceType);
    
    if (sourceType !== 'grams') input.grams.value = values.grams;
    if (sourceType !== 'ounces') input.ounces.value = values.ounces;
    if (sourceType !== 'joints') input.joints.value = values.joints;
    if (sourceType !== 'price') input.price.value = values.price;
};

// Event listeners
input.grams.addEventListener('input', () => {
    const value = parseFloat(input.grams.value) || 0;
    updateInputs(value, 'grams');
});

input.ounces.addEventListener('input', () => {
    const value = parseFloat(input.ounces.value) || 0;
    updateInputs(value, 'ounces');
});

input.joints.addEventListener('input', () => {
    const value = parseFloat(input.joints.value) || 0;
    updateInputs(value, 'joints');
});

input.price.addEventListener('input', () => {
    const value = parseFloat(input.price.value) || 0;
    updateInputs(value, 'price');
});

// Update all values when unit or number of joints changes
const updateAllValues = () => {
    const value = parseFloat(input.grams.value) || 0;
    updateInputs(value, 'grams');
};

input.numOfJ.addEventListener('input', updateAllValues);
input.unit.addEventListener('change', updateAllValues);