#1
n = int(input())

if n % 2 != 0:
    print("Weird")
else:
    if 2 <= n <= 5:
        print("Not Weird")
    elif 6 <= n <= 20:
        print("Weird")
    elif n > 20:
        print("Not Weird")
#2
a = int(input())
b = int(input())

print(a + b)
print(a - b)
print(a * b)
print(a % b)
#3
n = int(input())
for i in range(n):
    print(i * i)
#4
def is_leap(year):
    leap = False
    if year % 400 == 0:
        leap = True
    elif year % 100 == 0:
        leap = False
    elif year % 4 == 0:
        leap = True
    
    return leap

year = int(input())
print(is_leap(year))
#5
if __name__ == '__main__':
    n = int(input())
    my_list = []
    
    for _ in range(n):
        command_args = input().split()
        command = command_args[0]
        
        if command == "insert":
            index = int(command_args[1])
            element = int(command_args[2])
            my_list.insert(index, element)
            
        elif command == "print":
            print(my_list)
            
        elif command == "remove":
            element = int(command_args[1])
            my_list.remove(element)
            
        elif command == "append":
            element = int(command_args[1])
            my_list.append(element)
            
        elif command == "sort":
            my_list.sort()
            
        elif command == "pop":
            my_list.pop()
            
        elif command == "reverse":
            my_list.reverse()
#6
a = int(input())
b = int(input())
print(a // b)
print(a / b)
#7
if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())
    result = [[i, j, k] for i in range(x + 1) 
                        for j in range(y + 1) 
                        for k in range(z + 1) 
                        if i + j + k != n]
    
    print(result)
#8
def count_substring(string, sub_string):
    count = 0
    for i in range(len(string) - len(sub_string) + 1):
        if string[i:i+len(sub_string)] == sub_string:
            count += 1
    return count

if __name__ == '__main__':
    string = input().strip()
    sub_string = input().strip()
    count = count_substring(string, sub_string)
    print(count)
#9
if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])
    scores = sorted(set([s[1] for s in students]))
    second_lowest_score = scores[1]
    low_finalists = [s[0] for s in students if s[1] == second_lowest_score]
    low_finalists.sort()
    for name in low_finalists:
        print(name)
#10
if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    unique_scores = sorted(set(arr))
    print(unique_scores[-2])











