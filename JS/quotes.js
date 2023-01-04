const quotes = [
  {
    quote: "세상에서 가장 현명한 사람은 모든 사람으로부터 배우는 사람이다",
    author: "-탈무드-",
  },
  {
    quote:
      "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
    author: "-단테-",
  },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다",
    author: "-사무엘 존슨-",
  },
  {
    quote:
      "성공의 비결은 단 한 가지,잘할 수 있는 일에 광적으로 집중하는 것이다",
    author: "-톰 모나건-",
  },
  {
    quote:
      "진정으로 웃으려면 고통을 참아야 하며 나아가 고통을 즐길 줄 알아야 한다",
    author: "-찰리 채플린-",
  },
  {
    quote:
      "절대 어제를 후회하지 마라 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
    author: "-L. 론허바드-",
  },
  {
    quote:
      "어리석은 자는 멀리서 행복을 찾고 현명한 자는 자신의 발치에서 행복을 키워간다",
    author: "-제임스 오펜하임-",
  },
  {
    quote:
      "삶에 너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 모든 인생은 실험이다 더 많이 실험할수록 더 나아진다",
    author: "-랄프 왈도 에머슨-",
  },
  {
    quote: "행복은 습관이다 그것을 몸에 지녀라",
    author: "-허버드-",
  },
  {
    quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
    author: "-찰스다윈-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
