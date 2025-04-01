# 이슈

1. 분명히 3초동안 스크롤을 막는 코드를 짰는데 작동하지 않았다.
2. alphabet이 svg 파일(반응형으로 브라우저창 크기에 따라 변한다.)
3. 애니메이션이 끊기고 부드럽지가 않다.

# 경과

1. 문서 수준 대상(window.document, window.document.body 또는 window)에 등록된 휠/마우스휠 이벤트 리스너는 달리 지정하지 않으면 패시브로 처리되고 이러한 리스너 내부에서 preventDefault()를 호출하면 무시됩니다. 이는 Chrome 56에 제공된 스크롤링 개입의 휠 버전입니다.https://developers.google.com/web/updates/2017/01/scrolling-intervention
2. 똑같은 모양은 못 찾았지만, 대신에 letter를 svg 파일로 가진 라이브러리 @icongo/tb를 찾았다.
3. motion-framer를 써봤다.

# 결과

1. preventDefault() 말고도 addEventListener에 추가적인 매개변수에 옵션으로 passive:false를 추가해줘야 했다.
2. 소문자 svg 파일을 가진 라이브러리를 찾아봤지만 찾지 못했다. 추측이지만 svg 요소 작성에 시간은 걸리지만, 알파벳이라 복잡하진 않은 모양이니 스스로 작성한걸로 추측한다. 원본 페이지에서 svg 파일을 따올수도 있지만, 나는 그냥 라이브러리를 활용해서 진행하도록 했다.
3. 가볍게 만들려고 keyframes로 애니메이션을 처리했지만, motion framer로 작성한 애니메이션이 부드러웠다. 대신 motion framer를 활용하자 로딩시간이 길어졌다. 경우에 따라서 다르게 써주면 될 듯 싶다.
