from bs4 import BeautifulSoup
import requests
re = requests.get("https://rate.bot.com.tw/xrt?Lang=zh-TW")  
sp = BeautifulSoup(re.text, 'html.parser')

time = sp.select('.time')

print(time[0].string)

#--------------------------

#bank = sp.sele
