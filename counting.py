import os
filenum = sum(1 for item in os.listdir() if os.path.isfile(item))
print(f"There are {filenum} files in this directory")
