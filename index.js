function greetWidget() {
    return {
        neighbourName: '',
        greet() {
            return 'Hello, ' + this.neighbourName;
        }
    }
}

function transportWidget() {
    return {
        shift: '',
        transportFee(shift) {
            switch(shift) {
                case 'morning':
                    return 'R20';
                case 'afternoon':
                    return 'R10';
                case 'nightshift':
                    return 'free';
                default:
                    return 'Invalid shift';
            }
        }
    }
}

function wordGameWidget() {
    return {
        sentence: '',
        longestWord(sentence) {
            const words = sentence.split(' ');
            let longest = '';
            for (const word of words) {
                if (word.length >= longest.length) {
                    longest = word;
                }
            }
            return longest;
        },
        shortestWord(sentence) {
            const words = sentence.split(' ');
            let shortest = words[0];
            for (const word of words) {
                if (word.length <= shortest.length) {
                    shortest = word;
                }
            }
            return shortest;
        },
        wordLengths(sentence) {
            const words = sentence.split(' ');
            let totalLength = 0;
            for (const word of words) {
                totalLength += word.length;
            }
            return totalLength;
        }
    }
}

function itemsWidget() {
    return {
        threshold: 0,
        items: [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'apples', qty: 3 }
        ],
        filteredItems: [],
        itemsOver20: [],
        findItemsOver20(items) {
            return items.filter(item => item.qty > 20);
        },
        findItemsOver(items, threshold) {
            return items.filter(item => item.qty > threshold);
        },
        findItems() {
            this.filteredItems = this.findItemsOver(this.items, this.threshold);
            this.itemsOver20 = this.findItemsOver20(this.items);
        }
    }
}