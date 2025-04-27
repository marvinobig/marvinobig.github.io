---
title: 'Binary Search'
date: 2025-04-27
summary: "What a binary search is and its implementation in code"
banner:
    src: '/assets/images/blog-imgs/binary-search.webp'
    alt: "binary search"
thumbnail:
    src: '/assets/images/blog-imgs/python-code.webp' 
    alt: 'code snapshot of binary search implementation'
---

I've been going through data structures and algorithms recently and I want to document what I've learned so far. Binary search is an algorithm that is used to search for an item within a sorted array by cutting the items it has to search through in half until it finds what it is looking for or the search range has reached zero.

## Algorithm's Limitation

This algorithm requires the array it is used on to be sorted in advance as without sorting, the algorithm can't know which half of the array to search when the array is halved. This will be made much clearer when I explain the code behind it.

## The Code

```python
class Algos():

    @staticmethod
    def binarySearch(array, searchValue): 
        """
        Perform a binary search on an ordered array.
        Returns index of element or -1 if it does not exist.
        """
        startIndex = 0
        endIndex = len(array) - 1
        
        while startIndex <= endIndex:
            midIndex = (startIndex + endIndex) // 2

            if searchValue == array[midIndex]:
                return midIndex
            elif searchValue < array[midIndex]:
                endIndex = midIndex - 1
            elif searchValue > array[midIndex]:
                startIndex = midIndex + 1

        return -1
```

The code above is the full implementation of binary search. I plan to learn more algorithms so I've built a class that provides the algos as methods for easy use. 

## Code Explanation

```python
startIndex = 0
endIndex = len(array) - 1
```

The 'binarySearch' method starts by setting the start and end index variables. These control where the algorithm searches. 

```python
while startIndex <= endIndex:
```

The code above stops the code once the search is done but nothing was found.

```python
midIndex = (startIndex + endIndex) // 2
```

This code determines how the array will be halved. It accounts for when the size of the array is odd by rounding down the result of the expression using integer division.

```python
if searchValue == array[midIndex]:
    return midIndex
elif searchValue < array[midIndex]:
    endIndex = midIndex - 1
elif searchValue > array[midIndex]:
    startIndex = midIndex + 1
```

This code block is the most important piece of the algorithm as it determines what half of the array to search if the value is not found in the middle of the array. The two 'elif' statements demonstrate why the array needs to be sorted for the algorithm to work. Without sorting the algorithm would not be able to search the half of the array with the required value. 

If the search value is less than the middle value in the array, it sets the end index to the middle index of the array minus one. If the search value is greater however, it sets the start index to the middle index of the array plus one. It keeps doing this until either the value is found or it no longer has any space to search through.

This makes the algorithm very effective for very large data sets as its performance, when measured with big O, is O(log N). This means that, every time the data searched through is doubled, the number of steps till the value is found goes up by 1.