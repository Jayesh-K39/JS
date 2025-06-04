import os
import shutil

src = "/home/jk/py/push.sh"
dest = "/home/jk/js"

#os.rename(src, dest)

shutil.copy2(src, dest)

#shutil.move(src, dest)

#os.symlink('/home/jk/py/numpy', 'np')
print(" Mission Successful !")



"""     IMPORTANT PATHS  :
1)
micro ~/.bashrc
After doing the changes in ~/.bashrc, run this:

source ~/.bashrc


2)
micro ~/.config/micro/settings.json



"""

