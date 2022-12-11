# 2022-2-OSSProj-You_are_webcome-9  

### ❃ DGU Information Web service ![Logo_Character](https://user-images.githubusercontent.com/101785677/206251564-b6e4c2ba-5f3f-4b3a-ad90-07e6e46686a8.png)



#### Team : You're webcome
#### Team Leader : [문서연](https://github.com/seoyeun0106)(프론트엔드) , Team Member : [박수빈](https://github.com/P-subin)(백엔드) , [이지현](https://github.com/wlgus5704)(서버, 웹디자인)

#

<img src="https://img.shields.io/badge/License : MIT -E8E8E8?style=flat&TypeScript=white"> <img src="https://img.shields.io/badge/macOS-000000?style=flat&logo=macos&logoColor=white"/>  <img src="https://img.shields.io/badge/Window-0078D6?style=flat&logo=windows&logoColor=white"/>  

<img src="https://img.shields.io/badge/VScode -007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/> <img src="https://img.shields.io/badge/React 18.2.0 -61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Python 3.8.8 -3776AB?style=flat&logo=Python&logoColor=white"/>  <img src="https://img.shields.io/badge/Docker 20.10.21-2496ED?style=flat&logo=Docker&logoColor=white"/> 




#### ✤ 프로젝트 목표 : 동국대 교내 시설의 상세정보를 담은 웹 개발
##### 교내 편의시설 검색, 건물 정보 안내 (교내 열람실, 카페등의 운영시간, 전화번호 안내), 교내 경로 안내


#### ✤ 기대효과
##### - 신입생 및 재학생 학교의 편의 시설 정보를 손쉽게 이용 -> 학교 적응력 향상
##### - 현재 위치한 정보를 입력하여 가장 가까운 편의 시설 정보를 제공함으로써 효율적인 서비스 제공 -> 정보 접근 용이


#### ✤ 화면 설계도
![image](https://user-images.githubusercontent.com/114053036/206920731-2c794346-3a04-4849-ad0f-a9cf6ef14b4c.png)


#### ✤ 파일 구조

|폴더|내용|
|------|---|
|public/|이미지, 아이콘과 같은 자료 포함 폴더|
|src/pages|출력될 페이지|
|src/lib|사용되는 데이터 및 라우터, 커스텀 훅등 import 해서 활용할 폴더|
|src/components|page를 구성하는 데 활용될 컴포넌트들 다른 폴더에 들어있지 않으면 공용으로 사용되는 컴포넌트를 의미|
|src/components/BuildingInfo|건물 정보 페이지를 구성하는 데 활용될 컴포넌트들|
|src/components/Convenient|편의시설 검색 페이지를 구성하는 데 활용될 컴포넌트들|
|src/components/Map|교내 경로 페이지를 구성하는 데 활용될 컴포넌트들|
|src/components/MainPage|메인 페이지(홈)를 구성하는 데 활용될 컴포넌트들|
|src/components/asset|컴포넌트로 만들어 사용할 .svg 파일|
|backend/closeBuilding.py|출발 건물로부터 선택한 편의시설을 가까운 순으로 정렬하는 알고리즘|
|backend/find_path.py|출발지에서 도착지까지의 경로 노드를 출력하는 알고리즘|
|backend/find_shortcut.py|출발지에서 도착지까지의 지름길 정보를 출력하는 |





### 실행 방법 
- Local에 Docker 설치 되어있어야함 : https://docs.docker.com/get-docker/ 

```
docker pull wlgus5704/you_are_webcome:fin

docker run -d -p 8300:80 wlgus5704/you_are_webcome:fin
```

- 검색창에 localhost:8300 으로 접속  

#### ✤ [데모 영상]()
  
#  
   
### 메인 탭
###### 처음 접속시 보여지는 화면 

<img width="1429" alt="스크린샷 2022-12-11 오후 12 36 43" src="https://user-images.githubusercontent.com/101785677/206885126-44988d7c-fc53-421c-aad6-c13ec7e26833.png">


#    
   
### 교내 편의시설 탭
###### 출발 건물 및 편의시설(무인발급기, 복사기등)을 입력시, 건물에서 부터 가까운 순서대로 리스트 출력 
![4v0ShgyqKJQ1V6Td2ash3HMj_bfou4gSDbCw8lBgueW2omJUZ-tkp9k6Kmaul0iE8mFhT5_7CUUwnWYLOKmgSKL_Lnl9N_vjwnwjqZ2T7PJ4iBBWyD94nZPqvZUX](https://user-images.githubusercontent.com/101785677/206397705-0860bf7c-7cc1-45c2-b1d3-76f55f09c931.png)

###### ❃ 길찾기 버튼 누를시 다음과 같이 화면 전환, 검색 버튼을 누르거나 엔터 누를 시 경로 안내

<img width="1440" alt="스크린샷 2022-12-11 오후 8 57 44" src="https://user-images.githubusercontent.com/92535912/206902666-6ea9c531-46f6-4465-91c1-bfcbf0426629.png">


#  

### 교내 건물 안내 탭
###### 교내 학사운영실, 카페등의 운영시간, 전화번호를 안내하는 탭
<img width="1427" alt="스크린샷 2022-12-11 오후 1 01 50" src="https://user-images.githubusercontent.com/101785677/206885738-6accf1ad-7139-4aaa-afda-60c48728e638.png">

###### ❃ 핀 위치이동 확인가능
![Dec-11-2022 13-01-02](https://user-images.githubusercontent.com/101785677/206885723-d8eee27f-00c6-4cef-9225-9a8a241ed928.gif)



#  

### 교내 경로 보기 탭
###### 교내 최단경로 및 오르막길 반영된 경로 표시 해주는 탭 (지름길 간단 사진 안내 포함)
###### 경사반영 아이콘에 따라 경로 달라짐

![Dec-11-2022 13-06-35](https://user-images.githubusercontent.com/101785677/206885855-f4d20d2b-9f2a-45f1-affa-0d63222ebb6b.gif)

#  


#### Attributes
- Docker : https://hello-bryan.tistory.com/169
- Images : Freepik
  - [Smile Image](https://kr.freepik.com/free-vector/colorful-emoji-set-design_12067944.htm)
  - [Map Image](https://kr.freepik.com/free-psd/3d-rendering-of-gps-travel-icon_25778699.htm#&position=3&from_view=undefined)
  - [thumb-up Image](https://kr.freepik.com/free-psd/3d-rendering-of-thumb-up-hand_23735427.htm)
  - [Hands-holding-smartphone Image](https://kr.freepik.com/free-psd/3d-collection-with-hands-holding-smartphone_13678985.htm#query=3d&position=0&from_view=keyword)
  - [Pencil Image](https://kr.freepik.com/free-psd/3d-rendering-of-ui-icon_20546695.htm#query=3d&position=25&from_view=keyword)
  
- Fonts : Google Fonts
  - [Main font. Modak](https://fonts.google.com/specimen/Modak?query=modak)
  - [Sub font. apple-system O](https://developer.apple.com/fonts/system-fonts/)

