a = [10,45,67,23,98,12,24,50,83,42,56,2,5,79]
for i in range(len(a)-1):
    key = a[i]
    j = i -1
    while i >=0 and a[j]:
        a[j+1] = a[j]
        j =i-1
    a[j+1]=key
print(a)