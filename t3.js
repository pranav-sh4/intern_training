function removeDuplicates(numbers) {
    const uniqueValues = new Set(numbers);
    return [...uniqueValues];
}

const nums = [1, 2, 2, 3, 4, 4, 5, 2, 3, 4, 1, 5, 2];
console.log(removeDuplicates(nums)); 