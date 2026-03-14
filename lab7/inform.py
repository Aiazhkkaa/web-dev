#1
import math
a = int(input())
b = int(input())
c = math.hypot(a, b)
print(float(c))
#2
n = int(input())
next_num = n + 1
prev_num = n - 1
print(f"The next number for the number {n} is {next_num}.")
print(f"The previous number for the number {n} is {prev_num}.")
#3
n = int(input())
k = int(input())
result = k // n
print(result)
#4
n = int(input())
k = int(input())
remainder = k % n
print(remainder)
#5
v = int(input())
t = int(input())
length = 109
position = (v * t) % length
print(position)
#------------------------------------------
#1
a = int(input())
b = int(input())
if a > b:
    print(a)
else:
    print(b)
#2
year = int(input())

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("YES")
else:
    print("NO")
#3
ans_system = int(input())
ans_student = int(input())
if (ans_system == 1 and ans_student == 1) or (ans_system != 1 and ans_student != 1):
    print("YES")
else:
    print("NO")
#4
x = int(input())

if x > 0:
    print(1)
elif x < 0:
    print(-1)
else:
    print(0)
#5
a = int(input())
b = int(input())

if a > b:
    print(1)
elif b > a:
    print(2)
else:
    print(0)
#--------------------------------------------    
#1
a = int(input())
b = int(input())

for i in range(a, b + 1):
    if i % 2 == 0:
        print(i, end=" ")
#2
a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(a, b + 1):
    if i % d == c:
        print(i, end=" ")
#3
import math
a = int(input())
b = int(input())

for i in range(a, b + 1):
    root = math.isqrt(i)
    if root * root == i:
        print(i, end=" ")                
#4
x = int(input())

for i in range(2, x + 1):
    if x % i == 0:
        print(i)
        break
#5
x = int(input())

for i in range(1, x + 1):
    if x % i == 0:
        print(i, end=" ")
#6
x = int(input())
count = 0
i = 1

while i * i <= x:
    if x % i == 0:
        if i * i == x:
            count += 1
        else:
            count += 2
    i += 1

print(count)
#7
sum_val = 0
for _ in range(100):
    n = int(input())
    sum_val += n
print(sum_val)
#8
n = int(input())
total_sum = 0

for _ in range(n):
    num = int(input())
    total_sum += num

print(total_sum)
#9
n = int(input())
count = 0

for _ in range(n):
    num = int(input())
    if num == 0:
        count += 1

print(count)        
#------------------------------------------
#1
n = int(input())
i = 1

while i * i <= n:
    print(i * i)
    i += 1
#2
n = int(input())
i = 2

while n % i != 0:
    i += 1

print(i)
#3
n = int(input())
res = 1

while res <= n:
    print(res, end=" ")
    res = res * 2
#4
n = int(input())
if n == 1:
    print("YES")
else:
    while n > 1 and n % 2 == 0:
        n = n // 2
    if n == 1:
        print("YES")
    else:
        print("NO")            
#5
n = int(input())
res = 1
k = 0
while res < n:
    res = res * 2
    k += 1
print(k)
#---------------------------------
#1
n = int(input())
a = list(map(int, input().split()))
print(*(a[::2]))
#2
n = int(input())
a = list(map(int, input().split()))

for x in a:
    if x % 2 == 0:
        print(x, end=" ")
#3
n = int(input())
a = list(map(int, input().split()))

count = 0
for x in a:
    if x > 0:
        count += 1

print(count)
#4
n = int(input())
a = list(map(int, input().split()))
count = 0
for i in range(1, n):
    if a[i] > a[i - 1]:
        count += 1
print(count)
#5
n = int(input())
a = list(map(int, input().split()))

found = False
for i in range(1, n):
    if a[i] * a[i - 1] > 0:
        found = True
        break

if found:
    print("YES")
else:
    print("NO")
#6
n = int(input())
a = list(map(int, input().split()))
count = 0
for i in range(1, n - 1):
    if a[i] > a[i - 1] and a[i] > a[i + 1]:
        count += 1

print(count)
#7
n = int(input())
a = list(map(int, input().split()))
print(*(a[::-1]))
#-------------------------------------------------------
#1
def min_of_four(a, b, c, d):
    if a < b:
        min1 = a
    else:
        min1 = b
    if c < d:
        min2 = c
    else:
        min2 = d
    if min1 < min2:
        return min1
    else:
        return min2
nums = list(map(int, input().split()))
print(min_of_four(nums[0], nums[1], nums[2], nums[3]))
#2
def power(a, n):
    res = 1.0
    for i in range(n):
        res *= a
    return res
data = input().split()
a = float(data[0])
n = int(data[1])

print(power(a, n))
#3
x, y = map(int, input().split())
if x == 1 or y == 1:
    print(1)
else:
    print(0)







