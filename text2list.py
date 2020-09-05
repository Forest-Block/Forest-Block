
f=open("sw2.txt","r",encoding='utf-8')
f2=open("sw3.txt","w",encoding='utf-8')
f.readline()
for line in f:
    line=line.replace("\n", "")
    newline=',\''+line+'\''
    f2.write(newline)
f.close()
f2.close()