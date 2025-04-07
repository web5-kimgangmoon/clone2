# 클론코딩2

## 원본 페이지

https://www.danielstoopendaal.nl

## 주목표

- 반응형 웹사이트
- 코딩작성 속도 늘리기
- 간단한 계획 스케줄링과 함께 코딩

### 스택

next, framer-motion, swiper, react, tailwind, github, @heroicons/react, Lenis

### 기타

- 매일 커밋을 진행하며 모든 작업은 main 브렌치에 저장되고, 작업은 새로운 브렌치를 작성하여 squash하는 방식으로 진행된다.
- 단, 일요일은 쉬며 진행상황을 올리지 않는다. 일요일이 아닌 날에 개인사정으로 진행을 못한 경우에는 날짜 밑에 간단한 사유를 적어 커밋한다.
- issue는 issue.md 파일에 저장, 해결과정 또한 issue.md 파일에서 기재한다.

### 스택

next, framer-motion, swiper, react, tailwind, github, @heroicons/react

#### 03/31

- git 시작.
- 후보는 핀터레스트, X 필요하면 후보를 더 찾을 예정.

p.s. 오늘은 면접보고 지쳤습니다... 내일부터 노력할게요.

#### 04/01

- 후보 선정 완료. 얼굴 이미지는 svg 삽입.
- section1 애니메이션 및 반응형 제작 중.

#### 04/02

- section1 css 및 미끄러지는 스크롤 이펙트 작성중
- css의 추가나 수정은 적지만, 내부 로직은 크게 수정됐습니다.
- 전역 상태 관리 라이브러리(redux)와 resize 이벤트로 스크린의 브레이크 포인트 관리.
- lenis 라이브러리 추가.

#### 04/03

- section1의 내부 컴포넌트 구조 변경.
- height로 조절하던 커튼 애니메이션을, 구조를 바꾸고 translateY로 핸들링하도록 바꿨습니다.
- resizeContainer 모듈, 잘못된 로직 수정.
- section1의 css 포지션 조정.

#### 04/04

- section 쪽에 요소 하나 추가.(로고)
- header 추가.

#### 04/05

- mobile => tablet || desktop일 경우, 모바일 메뉴판이 닫히도록.
- body section 작성중

#### 04/07

- body component 작성중.
- 레이아웃과 css는 대부분 작성 완료.
- 애니메이션과 반응형에 따른 애니메이션 작성 필요.
