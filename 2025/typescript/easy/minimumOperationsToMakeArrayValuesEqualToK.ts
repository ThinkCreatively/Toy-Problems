function minOperations(nums: number[], k: number): number {
    let sorted = nums.sort((a, b) => a-b);
    if (sorted[0] < k) return -1;
    let operations = 0;

    for (let i = sorted.length-1; i > -1; i--) {
        if (sorted[i] < sorted[i+1]){
            operations++;
        }
    }

    if (sorted[0] > k) operations++;

    return operations;
};

console.log(minOperations([5,2,5,4,5], 2)); // 2
console.log(minOperations([2,1,2], 2)); // -1
console.log(minOperations([9,7,5,3], 4)); // 2