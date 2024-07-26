function addDatePrefixAndClassify() {
  const newsItems = document.querySelectorAll(
    "#ctl00_mainContent_divContent ul li"
  );
  newsItems.forEach((item) => {
    const link = item.querySelector("a");
    const fullText = link.textContent.toLowerCase();
    const dateStr = fullText.split(":")[0].trim();
    const title = fullText.split(":").slice(1).join(":").trim();

    link.innerHTML = `<span class="date-prefix">[${dateStr}]</span> ${title}`;

    if (fullText.includes("lịch thi")) {
      item.classList.add("exam-schedule");
    } else if (fullText.includes("điểm")) {
      item.classList.add("grades");
    } else if (fullText.includes("quy định thi")) {
      item.classList.add("exam-rules");
    } else if (fullText.includes("khảo thí")) {
      item.classList.add("testing");
    } else if (fullText.includes("đăng ký")) {
      item.classList.add("registration");
    } else if (fullText.includes("thông báo")) {
      item.classList.add("announcement");
    }
  });
}

addDatePrefixAndClassify();
