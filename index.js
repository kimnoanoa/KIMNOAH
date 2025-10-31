const pages = document.querySelectorAll('.page');
let currentPage = 0;
let isScrolling = false;

const topBtn = document.getElementById("topBtn");

window.addEventListener('wheel', (e) => {
  if (isScrolling) return;

  isScrolling = true;

  // 스크롤 방향에 따라 페이지 인덱스 조정
  if (e.deltaY > 0 && currentPage < pages.length - 1) {
    currentPage++;
  } else if (e.deltaY < 0 && currentPage > 0) {
    currentPage--;
  }

  // 페이지 이동
  pages[currentPage].scrollIntoView({ behavior: 'smooth' });

  // Top 버튼 표시 여부
  if (currentPage > 0) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }

  // 스크롤 딜레이
  setTimeout(() => {
    isScrolling = false;
  }, 500);
});

// Top 버튼 클릭 시 맨 위로
topBtn.addEventListener("click", () => {
  currentPage = 0;
  pages[0].scrollIntoView({ behavior: "smooth" });
  topBtn.style.display = "none";
});

  const container = document.querySelector('.projectContainer');
  const projects = document.querySelectorAll('.project');
  const prevBtn = document.querySelector('.prevBtn');
  const nextBtn = document.querySelector('.nextBtn');

  const visibleCount = 4;  // 한번에 보여줄 아이템 수
  const totalCount = projects.length;

  let currentIndex = 0;

  function updateButtons() {
    prevBtn.style.display = currentIndex > 0 ? 'block' : 'none';
    nextBtn.style.display = currentIndex < totalCount - visibleCount ? 'block' : 'none';
  }

  function slide() {
    const slideWidth = projects[0].offsetWidth + 10; // 아이템 너비 + gap
    container.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    updateButtons();
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      slide();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCount - visibleCount) {
      currentIndex++;
      slide();
    }
  });

  // 초기 세팅: 프로젝트 4개 이하면 버튼 숨김, 초과면 버튼 보임
  if (totalCount > visibleCount) {
    updateButtons();
  } else {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  }

  // index.js 또는 <script> 안에 추가

    document.addEventListener('DOMContentLoaded', () => {
      const reveals = document.querySelectorAll('.reveal');

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // 한 번만 애니메이션
          }
        });
      }, {
        threshold: 0.1 // 보이기 시작하면 발동
      });

      reveals.forEach(el => observer.observe(el));
    });

document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollBtn");
  const aboutMe = document.getElementById("aboutMe");

  scrollBtn.addEventListener("click", () => {
    aboutMe.scrollIntoView({ behavior: "auto" });
  });
});

const learnData = {
  tft: `
Flask 기반 서버를 직접 구축하면서 백엔드와 프론트엔드 간의 구조적인 연동 과정을 깊이 이해할 수 있었습니다.
특히 Riot API와 OpenAI API를 동시에 연결하면서, 서로 다른 형태의 데이터 응답을 처리하고 통합하는 과정에서
API 설계의 중요성과 데이터의 흐름을 체계적으로 배웠습니다.

또한 챗봇 UI와 시너지 예측 시뮬레이션 기능을 설계하면서
사용자 중심의 인터페이스 설계와 서버 로직 간의 상호작용을 고려하는 습관을 기르게 되었습니다.
서버에서 전달되는 데이터를 실시간으로 화면에 반영하는 과정에서
비동기 통신 구조와 JSON 데이터 처리 방식에 대한 이해가 한층 깊어졌습니다.

마지막으로 프로젝트를 실제로 배포하면서
환경 변수 관리(.env), API Key 보안, Render 서버 설정, 디버깅 및 배포 자동화 등의
실무에 가까운 경험을 쌓을 수 있었습니다.
이 과정을 통해 단순히 기능 구현이 아닌, 서비스를 완성도 있게 운영하는 개발자의 관점을 배우게 되었습니다.
  `,

  escape: `
Spring Boot 기반의 서버를 설계하면서 백엔드 로직 구조화와 데이터베이스 설계의 중요성을 체계적으로 이해할 수 있었습니다.
특히 예약 로직과 결제 시스템을 직접 구현하는 과정에서 트랜잭션 관리, 예외 처리, 서비스 계층 분리 등 안정적인 서비스 운영을 위한 설계 패턴을 익혔습니다.

또한 Thymeleaf를 이용해 프론트엔드와 백엔드를 통합하며 MVC 구조의 흐름을 명확히 이해할 수 있었고,
반응형 웹을 적용하면서 실제 사용자 환경에 맞는 UI·UX를 고려하는 능력을 기르게 되었습니다.

외부 API(Kakao, Naver, Google) 연동 과정에서 OAuth 인증 구조와 REST 통신의 흐름을 직접 경험하며,
API 요청·응답 구조와 보안 토큰 관리의 개념을 구체적으로 습득할 수 있었습니다.

문제 해결 과정에서 단순히 기능 구현을 넘어서,
서비스 품질을 유지하면서 확장 가능한 구조로 개선해 나가는 사고방식을 배우게 되었습니다.
  `,

  board: `
Spring Boot 기반의 CRUD 기능을 처음부터 직접 구현하면서, 데이터베이스 설계와 API 흐름을 구체적으로 이해할 수 있었습니다.
회원가입·로그인·게시글 등록과 같은 기능을 구현하며 MVC 패턴의 구조를 익히고, 백엔드 로직이 프론트엔드에 전달되는 과정을 체계적으로 경험했습니다.

Google OAuth 로그인을 연동하면서 외부 인증 절차의 작동 원리와 API 요청·응답 구조를 배웠으며,
토큰 기반 인증 방식의 개념을 이해하게 되었습니다.

무엇보다 이 프로젝트는 개인적으로 '처음 배포까지 완료한 프로젝트'로,
로컬 환경에서만 작동하던 서비스를 실제 서버에 배포하고 테스트하면서 배포 환경 설정, 종속성 관리, 버전 충돌 해결 등을 직접 겪을 수 있었습니다.

이 과정을 통해 단순한 기능 구현을 넘어,
‘사용 가능한 서비스’를 완성시키는 개발 프로세스 전반을 경험했고,
서비스를 안정적으로 운영하기 위한 개발자의 책임감과 세부 설정의 중요성을 배우게 되었습니다.
  `,

  burger: `
HTML, CSS, JavaScript를 활용해 웹페이지의 전체 구조를 직접 설계하며,
프론트엔드 개발의 기본 원리를 체계적으로 익힐 수 있었습니다.

메뉴 카테고리와 슬라이드 배너 UI를 구현하면서
요소의 배치, 반응형 구조 등 세부적인 화면 구성의 중요성을 체감했습니다.
특히 CSS Flex와 Grid의 차이를 이해하고, 시각적 완성도를 높일 수 있었습니다.

디자인과 사용성(UX)을 함께 고려하면서
단순한 화면 구현이 아닌, 사용자가 자연스럽게 몰입할 수 있는 웹 환경을 만드는 방법을 배웠습니다.
  `,

  pet: `
HTML, CSS, JavaScript를 이용해 처음으로 웹페이지를 직접 구현하면서,
프론트엔드 개발의 기본 구조와 흐름을 몸으로 익힐 수 있었습니다.

화면의 레이아웃을 구성하고 각 요소를 배치하는 과정에서
시각적 완성도뿐 아니라 코드 구조의 일관성과 유지보수성의 중요성을 배웠습니다.
특히 HTML의 계층 구조와 CSS 선택자, 위치 지정 속성(position, display 등)을 이해하며
디자인과 기능이 결합되는 방식을 체감했습니다.

또한 로그인 화면과 상세 페이지를 만들며 사용자 흐름을 고려한 화면 전환,
요소 간 간격 조정, 시각적 계층 설계 등 UI의 기본기를 다질 수 있었습니다.

이 프로젝트를 통해 ‘눈에 보이는 화면 뒤에는 논리적인 설계가 존재한다’는 점을 깨닫고,
프론트엔드 개발자로서의 첫 걸음을 확실히 내딛을 수 있었습니다.
  `
};

const modal = document.getElementById("learnModal");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".closeBtn");

document.querySelectorAll(".learnBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.project;
    modalText.textContent = learnData[key] || "배운 점이 아직 추가되지 않았습니다.";
    modal.style.display = "block";
  });
});

closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };





