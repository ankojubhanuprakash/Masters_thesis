import os
import wget
#import requests # to get image from the web
#import shutil # to save it locally


path='https://psycho-tests.com/image/'
image_max_class = ['A','B','C','D','E']
image_sub_class=[i for i in range(1,13)]
image_mini_class = [i for i in range(0,12)]
parent_dir = "D:\MS_R_CGS\sem-3\Raevan\images"

for ma in image_max_class:
    for sub in image_sub_class:
        for mini in image_mini_class:
            if mini <10:
                image_url=path+ma+'-'+str(sub)+'/_0'+str(mini)+'.jpg'
            else:
                image_url=path+ma+'-'+str(sub)+'/_'+str(mini)+'.jpg'
            directory = ma+'-'+str(sub)
            sys_path = os.path.join(parent_dir, directory)
            try:
                os.mkdir(sys_path)
            except Exception as e:
                print(e)
            os.chdir(sys_path)   
            try: 
                filename = wget.download(image_url)
                print(filename) 
            except Exception as e:
                print(e)     
            
           #'''
           # try:
           #     r = requests.get(image_url, stream = True) 
           # except Exception as e:
           #     print(e)
          # 
          #  if r.status_code == 200:
          #      # Set decode_content value to True, otherwise the downloaded image file's size will be zero.
          #      r.raw.decode_content = True
          #          # Open a local file with wb ( write binary ) permission.
          #      with open(filename,'wb') as f:
          #          shutil.copyfileobj(r.raw, f)
          #          print('Image sucessfully Downloaded: ',filename)
          #  else:
          #      print(r.status_code)
          #      print('Image Couldn\'t be retreived')
          #  '''




#https://psycho-tests.com/image/A-1/_01.jpg