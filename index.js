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
  }, 1000);
});

// Top 버튼 클릭 시 맨 위로
topBtn.addEventListener("click", () => {
  currentPage = 0;
  pages[0].scrollIntoView({ behavior: "smooth" });
  topBtn.style.display = "none";
});
