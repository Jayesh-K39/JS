import os
filenum = sum(1 for item in os.listdir() if os.path.isfile(item) and not item.startswith('.'))
allnum = sum(1 for item in os.listdir() if os.path.isfile(item))
print(f"There are {filenum} files in this directory (excluding the hidden ones)\n\nAnd {allnum} including the hidden ones.")



#hidden = (file for file in os.listdir() if os.path.isfile(file) and file.startswith('.') )
print(f"\nThe hidden ones are: {list(file for file in os.listdir() if os.path.isfile(file) and file.startswith('.'))}")

