#1
def count_evens(nums):
    count = 0
    for n in nums:
        if n % 2 == 0:
            count += 1
    return count
#2
def sum13(nums):
    total = 0
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i += 2
        else:
            total += nums[i]
            i += 1
            
    return total
#3
def big_diff(nums):
    largest = max(nums)
    smallest = min(nums)

    return largest - smallest
#4
def sum67(nums):
    total = 0
    record = True  
    for n in nums:
        if n == 6:
            record = False  
        if record:
            total += n
        if n == 7 and not record:
            record = True  
            
    return total
#5
def centered_average(nums):
    total_sum = sum(nums)
    big = max(nums)
    small = min(nums)
    centered_sum = total_sum - big - small
    count = len(nums) - 2
    return centered_sum // count
#6
def has22(nums):
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i+1] == 2:
            return True
    return False








