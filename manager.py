import os
import shutil


src = "/home/jk/js/counting.py"
dest = "/home/jk/Life"

#os.rename(src, dest)
#shutil.move(src,dest)
shutil.copy2(src, dest)
#os.symlink("/home/jk/C/C_practice", "cp")

'''items =  [f for f in os.listdir(src) if os.path.isfile(os.path.join(src, f))]
for a in items:
    src_path = os.path.join(src, a)
    dest_path = os.path.join(dest, a)
    shutil.move(src_path, dest_path)'''


print(" Mission Successful !")

"""     IMPORTANT PATHS  :   


1)
micro ~/.bashrc 
After doing the changes in ~/.bashrc, run this:

source ~/.bashrc


2)
micro ~/.config/micro/settings.json


"""
