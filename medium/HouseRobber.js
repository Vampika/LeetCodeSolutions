/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {
    if(nums.length === 1)
        return nums[0];

    let array = [];

    array[0] = nums[0];
    array[1] = Math.max(array[0], nums[1]);

    for(let i = 2; i < nums.length; i++){
        array[i] = Math.max(array[i-1], (nums[i] + array[i-2]));
    }

    return array[array.length - 1];
};