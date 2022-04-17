# file created by me

from django.shortcuts import render
from django.http import HttpResponse

api_key = "AIzaSyC6vhc96efjlU1jk43LK-Et5IuKv1oYZSc"
from googleapiclient.discovery import build
youtube = build('youtube', 'v3', developerKey=api_key)

req = youtube.search().list(q='aayam tech fest advaitam', part='snippet', type='video', maxResults=10)

res = req.execute()

title = []
desc = []
url = []

for item in res['items']:
    title.append(item['snippet']['title'])
    desc.append(item['snippet']['description'])
    url.append(item['id']['videoId'])

j=0
title_1 =[]
for i in title:
    title_1.append(i.lower())

title_2 = []
index_title = []
j =0

for i in title_1:
    if ('aayam' and 'tech' and 'fest' and 'agartala') or ('advaitam' and 'agartala') in i:
        index_title.append(j)
    j+=1

title_final =title[0:9]
desc_final = desc[0:9]
url_final = url[0:9]

title_label =['title_one','title_two','title_three','title_four','title_five','title_six', 'title_seven', 'title_eight', 'title_nine']
desc_label = ['desc_one','desc_two','desc_three','desc_four','desc_five','desc_six', 'desc_seven', 'desc_eight', 'desc_nine']
url_label = ['url_one','url_two','url_three','url_four','url_five','url_six', 'url_seven', 'url_eight', 'url_nine']

params ={}

for i in range(9):
    params.update({ 
        title_label[i] : title_final[i],
        desc_label[i] : desc_final[i],
        url_label[i] : url_final[i]
    })


def index(request):
    return render(request, 'myapp/index.html', params)

def map(request):
    return render(request, 'myapp/map.html')
