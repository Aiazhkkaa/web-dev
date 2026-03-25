#1
def first_last6(nums):
    if nums[0] == 6 or nums[-1] == 6:
        return True
    else:
        return False
#2
def common_end(a, b):
    return a[0] == b[0] or a[-1] == b[-1]
print(common_end([1, 2, 3], [7, 3]))    # Output: True
print(common_end([1, 2, 3], [7, 3, 2])) # Output: False
print(common_end([1, 2, 3], [1, 3]))    # Output: True
#3
def reverse3(nums):
    return [nums[2], nums[1], nums[0]]
#4
def middle_way(a, b):
    return [a[1], b[1]]
print(middle_way([1, 2, 3], [4, 5, 6]))  # Output: [2, 5]
print(middle_way([7, 7, 7], [3, 8, 0]))  # Output: [7, 8]
print(middle_way([5, 2, 9], [1, 4, 5]))  # Output: [2, 4]
#5
def same_first_last(nums):
    return len(nums) >= 1 and nums[0] == nums[-1]
print(same_first_last([1, 2, 3]))      # Output: False
print(same_first_last([1, 2, 3, 1]))   # Output: True
print(same_first_last([1, 2, 1]))      # Output: True
#6
def sum3(nums):
    return sum(nums)
#7
def max_end3(nums):
    big = max(nums[0], nums[2])
    return [big, big, big]
#8
def make_ends(nums):
    return [nums[0], nums[-1]]
#9
def make_pi():
    return [3, 1, 4]
print(make_pi())
#10
def rotate_left3(nums):
    return [nums[1], nums[2], nums[0]]
#11
def sum2(nums):
    return sum(nums[:2])




