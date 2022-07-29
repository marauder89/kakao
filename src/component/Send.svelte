<script>
  const initialize = () => {
    Kakao.init("d6f07c9ac1bc161138392927472aacfe");
    Kakao.Link.createCustomButton({ container: document.getElementById("kakao"), templateId: 80490 });
  };
</script>

<h1>
  <a id="kakao">
    모바일 청첩장 전송하기
    <br />
    <img src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" width="195" height="195" style="max-width: 500%; height: auto;" alt="" />
  </a>
</h1>

<svelte:head>
  <script src="https://developers.kakao.com/sdk/js/kakao.js" on:load={initialize}></script>
</svelte:head>
