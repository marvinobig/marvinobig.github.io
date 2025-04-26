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


- what is binary search
- its limitations

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

- explain your code