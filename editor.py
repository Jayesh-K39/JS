import os 
import subprocess
def editorx():
    editor =os.environ.get('EDITOR', 'micro')
    subprocess.call([editor, 'hello.js'])


editorx()
