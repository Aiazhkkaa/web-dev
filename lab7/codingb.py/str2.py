#1
def double_char(str):
    result = ""
    for char in str:
        result += char * 2
    return result
#2
def count_code(str):
    count = 0
    for i in range(len(str) - 3):
        if str[i:i+2] == "co" and str[i+3] == "e":
            count += 1
    return count
print(count_code('aaacodebbb'))  # Output: 1
print(count_code('codexxcode'))  # Output: 2
print(count_code('cozexxcope'))  # Output: 2
#3
def count_hi(str):
    count = 0
    for i in range(len(str) - 1):
        if str[i:i+2] == 'hi':
            count += 1
    return count
print(count_hi('abc hi ho')) # Output: 1
print(count_hi('ABChi hi'))  # Output: 2
print(count_hi('hihi'))      # Output: 2
#4
def end_other(a, b):
    a_low = a.lower()
    b_low = b.lower()
    return a_low.endswith(b_low) or b_low.endswith(a_low)
print(end_other('Hiabc', 'abc'))    # Output: True
print(end_other('AbC', 'HiaBc'))    # Output: True
print(end_other('abc', 'abXabc'))   # Output: True
#5
def cat_dog(str):
    count_cat = str.count('cat')
    count_dog = str.count('dog')
    return count_cat == count_dog
print(cat_dog('catdog'))        # Output: True
print(cat_dog('catcat'))        # Output: False
print(cat_dog('1cat1cadodog'))  # Output: True
#6
def xyz_there(str):
    for i in range(len(str) - 2):
        if str[i:i+3] == 'xyz':
            if i == 0 or str[i-1] != '.':
                return True
    return False
print(xyz_there('abcxyz'))   # Output: True
print(xyz_there('abc.xyz'))  # Output: False
print(xyz_there('xyz.abc'))  # Output: True









