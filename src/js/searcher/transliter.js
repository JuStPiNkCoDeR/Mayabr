const UNICODEtoASCII = [
    ['а', 'a'], ['б', 'b'], ['в', 'v'],
    ['г', 'g'], ['д', 'd'], ['е', ['e', { value: 'ye', condition: { index: 0 } }]],
    ['ё', 'yo'], ['ж', 'zh'], ['з', 'z'],
    ['и', 'i'], ['й', 'y'], ['к', 'k'],
    ['л', 'l'], ['м', 'm'], ['н', 'n'],
    ['о', 'o'], ['п', 'p'], ['р', 'r'],
    ['с', 's'], ['т', 't'], ['у', 'u'],
    ['ф', 'f'], ['х', 'h'], ['ц', 'ts'],
    ['ч', 'ch'], ['ш', 'sh'], ['щ', 'sh'],
    ['ы', 'y'], ['э', 'e'], ['ю', 'yu'],
    ['я', 'ya']
];

function* getChars() {
    try {
        for (let i = 0; i < UNICODEtoASCII.length; i++) {
            yield UNICODEtoASCII[i];
        }
    } catch (e) {
    }
}

function replacer(str, char, offset) {
    let ans = '';
    let iterator = getChars();

    for (let combination of iterator) {
        let letter = '';
        if (combination[0] === str) {
            let possible = combination[1];

            if (Array.isArray(possible)) {
                for (let j = 0; j < possible.length; j++) {
                    if (possible[j]['condition']) {
                        if (possible[j]['condition'].index !== undefined) {
                            if (offset === possible[j]['condition']['index']) letter = possible[j]['value'];
                        }
                    } else letter = possible[j];
                }
            } else {
                letter = possible;
            }
            iterator.throw(new Error('Answer already found'));
        }

        ans = letter;
    }

    return ans;
}

export function transliter(string) {
    return String.prototype.replace.apply(string, [/([а-я])/g, replacer]);
}

export default transliter;