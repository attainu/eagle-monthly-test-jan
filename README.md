- Day 1 Test

1) Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.


- Example:

  Input: [0,1,0,3,12]

  Output: [1,3,12,0,0]



- Edge cases:

  Input: [0,1,0,12,3]

  Output: [1,12,3,0,0]


- Input: []

  Output: []


- note:
  You must do this in-place without making a copy of the array.
  Minimize the total number of operations.
  mention time and space complexity of your algorithm.
  Handle the edge cases.
  
  
- [code link](https://github.com/attainu/eagle-monthly-test-jan/blob/master/day-1/moveZeros.js)



------------------------------------------------------------------------------------------------------------------------------


- Day 2 Test
1) Write a program to calculate factorial of a positive number including 0. Implement recursively and top-down and bottom-up approach.


- Example 1:

  Input: 2

  Output: 2



- Example 2:

  Input: 0

  Output: 1


- note:
  mention time and space complexity of your algorithm.
  Handle the edge cases.
  
  
- [code link](https://github.com/attainu/eagle-monthly-test-jan/blob/master/day-2/factorial.js)


2) Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.


- Example 1:

    Input: [-2,1,-3,4,-1,2,1,-5,4],

    Output: 6

    Explanation: [4,-1,2,1] has the largest sum = 6.

- Example 2:

    Input: [100, -100, 1, 50, 10],

    Output: 100

    Explanation: [100] has the largest sum = 100.

- note:
  mention time and space complexity of your algorithm.
  Handle the edge cases.
  

- [code link](https://github.com/attainu/eagle-monthly-test-jan/blob/master/day-2/maximumSubarray.js)

------------------------------------------------------------------------------------------------------------------------------


- Day 3 Test
1) Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

- Example:
    Input: 1->2->4, 1->3->4
    Output: 1->1->2->3->4->4

- note:
  mention time and space complexity of your algorithm.
  Handle the edge cases.

- [code link](https://github.com/attainu/eagle-monthly-test-jan/blob/master/day-3/mergeLists.js)

------------------------------------------------------------------------------------------------------------------------------


- Day 4 Test
1) Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

- note:
  mention time and space complexity of your algorithm.
  Handle the edge cases.
  

- [code link](https://github.com/attainu/eagle-monthly-test-jan/blob/master/day-4/calcDiameter.js)

2) Given two binary search  trees, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

- note:
  mention time and space complexity of your algorithm.
  Handle the edge cases.
  

- [code link](https://github.com/attainu/eagle-monthly-test-jan/blob/master/day-4/sameTree.js)

------------------------------------------------------------------------------------------------------------------------------


- Day 5 Test
1) Find the shortest length of path from source and destination. To find the shortest path, we use BFS rather than DFS. 


for the following graph
A -> B C

B -> A D E

C -> A

D -> B E F

E -> B D F

F -> D E

- Example1 
    Input1: A 
            B

    Output: 1

- Example2
    Input1: A
            D

    Output: 2

- note:
  mention time and space complexity of your algorithm.
  Handle the edge cases.
  

- [code link](https://github.com/attainu/eagle-monthly-test-jan/blob/master/day-5/graphs.js)

------------------------------------------------------------------------------------------------------------------------------


- day 6 Test - overall
1) Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The Output must not contain duplicate triplets.

Example:

Input = [-1, 0, 1, 2, -1, -4]

Output:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

- note:
  mention time and space complexity of your algorithm.
  Handle the edge cases.

2) Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.

- note:
  mention time and space complexity of your algorithm.
  Handle the edge cases.

3) Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in  O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
Note:

The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...

- note:
  mention time and space complexity of your algorithm.
  Handle the edge cases.

4) Invert a binary search tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

- note:
  mention time and space complexity of your algorithm.
  Handle the edge cases.

5) Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "hackerank"
return 0.

s = "lovehackerank",
return 2.
Note: You may assume the string contain only lowercase letters.

- note:
  mention time and space complexity of your algorithm.
  Handle the edge cases.

6) Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.

- note:
  mention time and space complexity of your algorithm.
  Handle the edge cases.