const check = document.getElementById('check-btn');
const clear = document.getElementById('clear-btn');
const input = document.getElementById('user-input');
const result = document.getElementById('results-div');
let isValid;
let isInvalid;
let isValidCount = 0;
let isInvalidCount = 0;
const validUSNumbers = [
    "1 555-555-5555",
    "1 (555) 555-5555",
    "1(555)555-5555",
    "1 555 555 5555",
    "5555555555",
    "555-555-5555",
    "(555)555-5555",
    '1 456 789 4444',
];
const invalidUSNumbers = [
    '555-5555',
    '5555555',
    '1 555)555-5555',
    '123**&!!asdf#',
    '55555555',
    '(6054756961)',
    '2 (757) 622-7382',
    '0 (757) 622-7382',
    '-1 (757) 622-7382',
    '2 757 622-7382',
    '10 (757) 622-7382',
    '27576227382',
    '(275)76227382',
    '2(757)6227382',
    '2(757)622-7382',
    '555)-555-5555',
    '(555-555-5555',
    '(555)5(55?)-5555',
    '55 55-55-555-5',
    '11 555-555-5555'
];


const logoAnimation = () => {
    const logo = document.querySelector('.logo');
    console.log(logo);
    logo.addEventListener('mouseenter', () => {
        logo.classList.add('hover');
    })
    logo.addEventListener('mouseleave', () => {
        const hover = document.querySelector('.hover');
        const computedStyle = window.getComputedStyle(hover);
        const hue = computedStyle.filter;
        logo.style.setProperty('filter', hue)
        setTimeout(() => {
            logo.style.setProperty('filter',`hue-rotate(0deg)`)
        }, 1);
        logo.classList.remove('hover');
    });
}

const buttonAnimation = () => {
    const button = document.querySelectorAll('button');
    button.forEach((button) => {
        button.addEventListener('mousedown', () => {
            button.classList.add("active");
            setTimeout(() => {
                button.classList.remove("active");
            }, 400);
        });
    });
}

buttonAnimation();
logoAnimation();

const clearInput = () => {
    input.value = '';
    result.classList.remove('valid');
    result.classList.remove('invalid');
    result.textContent = 'Output was cleared';
    setTimeout(() => {
        result.classList.add('collapse');
    }, 1000);
};

const telephoneCheckRegexUS = (str) => {
    const regex = /^(?:1\s?)?(?:\((\d{3})\)|(\d{3}))[\s-]?(\d{3})[\s-]?(\d{4})$/;
    return regex.test(str);
};

// console.log('--- Valid Numbers (true) ---');
// validUSNumbers.forEach(number => {
//     console.log(telephoneCheckRegexUS(number),number);
//     isValidCount += 1;
// });

// console.log('--- Invalid Numbers (false) ---');
// invalidUSNumbers.forEach(number => {
//     console.log(telephoneCheckRegexUS(number), number);
//     isInvalidCount += 1;
// });

// isValid = validUSNumbers.every(number => telephoneCheckRegexUS(number))
// isInvalid = invalidUSNumbers.every(number => !telephoneCheckRegexUS(number))

// console.log(`Valid Test(${isValidCount}): ${isValid ? 'PASS' : 'FAIL'}, Invalid Test(${isInvalidCount}): ${isInvalid ? 'PASS' : 'FAIL'}`)

const checkNumber = () => {
    if (input.value === '') {
        alert('Please provide a phone number');
        } else {
            result.classList.remove('collapse','hidden');
            if (telephoneCheckRegexUS(input.value.trim())) {
                result.textContent = `Valid US number: ${input.value}`
                result.classList.replace('invalid','valid') || result.classList.add('valid');
            } else {
                result.textContent = `Invalid US number: ${input.value}`;
                result.classList.replace('valid','invalid') || result.classList.add('invalid');
            }
        }
}

document.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        e.preventDefault();
        checkNumber();
    }
});
    
check.addEventListener('click', checkNumber);
clear.addEventListener('click', clearInput);