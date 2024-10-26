// twoSum.js
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// validParentheses.js
function isValid(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of s) {
        if (pairs[char]) {
            stack.push(char);
        } else {
            const lastOpen = stack.pop();
            if (pairs[lastOpen] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// mergeSortedLists.js
function mergeLists(list1, list2) {
    let merged = [];
    let i = 0;
    let j = 0;

    while (i < list1.length && j < list2.length) {
        if (list1[i] <= list2[j]) {
            merged.push(list1[i]);
            i++;
        } else {
            merged.push(list2[j]);
            j++;
        }
    }

    // Add remaining elements
    while (i < list1.length) {
        merged.push(list1[i]);
        i++;
    }

    while (j < list2.length) {
        merged.push(list2[j]);
        j++;
    }

    return merged;
}

// maxProfit.js
function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            const currentProfit = prices[i] - minPrice;
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        }
    }

    return maxProfit;
}

// binarySearch.js
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

// removeDuplicates.js
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let uniquePos = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniquePos]) {
            uniquePos++;
            nums[uniquePos] = nums[i];
        }
    }

    return uniquePos + 1;
}

// digitalRoot.js
function digitalRoot(n) {
    while (n > 9) {
        n = String(n)
            .split('')
            .reduce((sum, digit) => sum + Number(digit), 0);
    }
    return n;
}

// duplicateEncoder.js
function duplicateEncode(word) {
    word = word.toLowerCase();
    let result = '';

    for (let char of word) {
        if (word.indexOf(char) === word.lastIndexOf(char)) {
            result += '(';
        } else {
            result += ')';
        }
    }

    return result;
}

// findOddInt.js
function findOdd(arr) {
    let counts = {};

    for (let num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }

    for (let num in counts) {
        if (counts[num] % 2 === 1) {
            return Number(num);
        }
    }
}

// sortOdd.js
function sortOdd(array) {
    const oddNums = array.filter(n => n % 2).sort((a, b) => a - b);
    let oddIndex = 0;

    return array.map(n => n % 2 ? oddNums[oddIndex++] : n);
}

// dnaStrand.js
function dnaStrand(dna) {
    const pairs = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    };

    return dna.split('').map(char => pairs[char]).join('');
}

// nextSquare.js
function findNextSquare(sq) {
    const root = Math.sqrt(sq);
    if (Math.floor(root) !== root) return -1;
    return Math.pow(root + 1, 2);
}

// isogram.js
function isIsogram(str) {
    str = str.toLowerCase();
    let seen = {};

    for (let char of str) {
        if (seen[char]) return false;
        seen[char] = true;
    }

    return true;
}

// reverseWords.js
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}