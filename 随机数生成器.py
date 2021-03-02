import random
print('''                                             HK出品
''')
m=int(input("请输入想抽取的随机数个数："))
low=int(input("请输入您想要的数值的下限："))
high=int(input("请输入您想要的数值的上限："))
a=input("所抽取的数值是否可以重复，请回答  '是' 或 ‘否’\n")
list=[]
if a ==('否'):
    L1 = random.sample(range(low, high+1), m)
    print(L1)
else:
    for i in range(m):
        b = random.randint(low,high)
        list.append(b)
    print(list)
print(input("请敲击任意按键退出"))