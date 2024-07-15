// Transport Fee Function JS
function transportFee() {
    return {
        userInput: '',
        result: '',
        calculateFee(shift) {
            if (shift === 'morning') {
                return 'R20';
            } else if (shift === 'afternoon') {
                return 'R10';
            } else if (shift === 'nightshift') {
                return 'free';
            } else {
                return 'invalid shift selected.';
            }
        }
    }
}

document.addEventListener('alpine:init', () => {
    Alpine.data('transportFee', transportFee);
});


// Total Phone Bill Function
function phoneBillCalculator() {
    return {
        numCalls: '',
        numSMS: '',
        result: '',
        calculateBill() {
            var callCount = parseInt(this.numCalls) || 0;
            var smsCount = parseInt(this.numSMS) || 0;
            
            var totalCost = (callCount * 2.75) + (smsCount * 0.65);
            
            this.result = 'R' + totalCost.toFixed(2);
        }
    };
}

document.addEventListener('alpine:init', () => {
    Alpine.data('phoneBillCalculator', phoneBillCalculator);
});



// Greeting Function

function greetingApp() {
    return {
        name: '',
        language: 'isiZulu',
        result: '',
        warning: '',
        greetings: {
            english: 'Hello',
            isiZulu: 'Sawubona',
            Tswanah: 'Dumela',
            isiXhosa: 'Molo'
        },

        generateGreeting() {
            if (this.name.trim() === '') {
                this.warning = 'Please enter your name';
                this.result = '';
            } else {
                this.warning = '';
                const greeting = this.greetings[this.language];
                this.result = `${greeting}, ${this.name}`;
            }
        },
    }
}

document.addEventListener('alpine:init', () => {
    Alpine.data('greetingApp', greetingApp);
});


// Enough Airtime Function
function airtimeCalculator() {
    return {
        usedAirtime: '',
        balanceAirtime: 0,
        result: '',
        
        calculateRemainingAirtime() {
            var sorted_list = this.usedAirtime.split(",");
            var callCost = 1.88;
            var smsCost = 0.75;
            var dataCost = 12;
           
            var totalCost = 0;
           
            for (var i = 0; i < sorted_list.length; i++) {
                if (sorted_list[i] === 'call') {
                    totalCost += callCost;
                } else if (sorted_list[i] === 'sms') {
                    totalCost += smsCost;
                } else if (sorted_list[i] === 'data') {
                    totalCost += dataCost;
                }
            }
            
            var remainingAirtime = this.balanceAirtime - totalCost;
            
            if (remainingAirtime > 0) { 
                this.result = 'R' + remainingAirtime.toFixed(2);
            } else { 
                this.result = 'R0.00';
            }
        }
    };
}

document.addEventListener('alpine:init', () => {
    Alpine.data('airtimeCalculator', airtimeCalculator);
});