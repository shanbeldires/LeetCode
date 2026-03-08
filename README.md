# Two Sum - JavaScript Solution

[1 - Two Sum](https://leetcode.com/problems/two-sum/)

## Problem Description

Given an array of integers `nums` and an integer `target`, return **indices of the two numbers** such that they add up to `target`.

You may assume that **each input would have exactly one solution**, and you may not use the same element twice.

You can return the answer in **any order**.

---

## Examples

### Example 1

**Input:**  
```javascript
nums = [2,7,11,15], target = 9

Output:

[0,1]

Explanation:
nums[0] + nums[1] == 2 + 7 == 9, so we return [0,1].

Example 2

Input:

nums = [3,2,4], target = 6

Output:

[1,2]

Explanation:
nums[1] + nums[2] == 2 + 4 == 6, so we return [1,2].

Example 3

Input:

nums = [3,3], target = 6

Output:

[0,1]

Explanation:
nums[0] + nums[1] == 3 + 3 == 6, so we return [0,1].

Solution Approach

We can solve this problem using a hash map to track indices:

Create an empty object map to store numbers as keys and their indices as values.

Loop through the array:

For each number num, calculate the complement: complement = target - num.

If complement exists in map, return [map[complement], i].

Otherwise, store the current number and index in the map: map[num] = i.

This ensures O(n) time complexity.

JavaScript Implementation
function twoSum(nums, target) {
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in map) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
}

// Test cases
console.log(twoSum([2,7,11,15], 9));  // [0,1]
console.log(twoSum([3,2,4], 6));      // [1,2]
console.log(twoSum([3,3], 6));        // [0,1]
Key Points

Uses a hash map for efficient lookup.

Runs in O(n) time, O(n) space.

Guarantees exactly one solution.

Can return indices in any order.
