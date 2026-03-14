#1
def hello_name(name):
    return "Hello " + name + "!"
#2
def make_out_word(out, word):
    return out[:2] + word + out[2:]

print(make_out_word('<<>>', 'Yay'))    
print(make_out_word('[[]]', 'word'))      
#3
def make_out_word(out, word):
    middle = len(out) // 2
    return out[:middle] + word + out[middle:]
#4
def non_start(a, b):
    return a[1:] + b[1:]
#5
def make_abba(a, b):
    return a + b + b + a
print(make_abba('Hi', 'Bye'))       
print(make_abba('Yo', 'Alice'))     
print(make_abba('What', 'Up'))      
#6
def extra_end(str):
    last_two = str[-2:]
    return last_two * 3
print(extra_end('Hello')) 
print(extra_end('ab'))    
print(extra_end('Hi'))   
#7
def without_end(str):
    return str[1:-1]
print(without_end('Hello'))   # Output: ell
print(without_end('java'))    # Output: av
print(without_end('coding'))  # Output: odin
#8
def left2(str):
    return str[2:] + str[:2]
print(left2('Hello'))  # Output: lloHe
print(left2('java'))   # Output: vaja
print(left2('Hi'))     # Output: Hi






