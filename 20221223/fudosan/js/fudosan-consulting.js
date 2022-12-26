// For Quitz and Answer
const data = [
  {
    major: "購入時",
    minor: "不動産購入のきっかけは何でしたか？今検討中の方も目的を選択してください。",
    questions: [
      "自分で利用したい（居住用目的）",
      "収入を増やしたい（投資目的）",
      "他人から薦められた",
      "家族から薦められた",
      "節税目的が強い（税金を限りなく0にしたい）",
    ],
    marks: [10, 8, 6, 4, 2],
  },
  {
    major: "購入時",
    minor: "購入された方の購入時の年齢は何歳ですか？",
    questions: ["７４歳未満", "７５歳から７９歳", "８０歳から８４歳", "８５歳から８９歳", "節税目的が強い（税金を限りなく0にしたい）９０歳以上"],
    marks: [5, 4, 3, 2, 1],
  },
  {
    major: "購入時",
    minor: "購入された方の購入タイミングは次のうちどれですか？",
    questions: [
      "亡くなる前（５年超）",
      "亡くなる前（5年以内）",
      "亡くなる前（3年以内）",
      "亡くなる直前（1年以内）",
      "亡くなる直前（6ヶ月以内）",
      "これから購入を検討",
    ],
    marks: [5, 4, 3, 2, 1, 5],
  },
  {
    major: "購入時",
    minor: "購入物件の地域についてお答えください。今検討中の方もいずれかを選択してください",
    questions: ["居住地から近い物件", "縁のある物件", "収益性を意識した物件", "ご自身で利用の可能性がある物件", "縁の薄い物件"],
    marks: [5, 4, 3, 2, 1],
  },
  {
    major: "購入時",
    minor: "ご本人（被相続人）の購入意思があったことを証明できますか？",
    questions: [
      "購入意思があったことを証明できる",
      "購入意思があったが証明しづらい",
      "購入意思が曖昧で不動産経営有",
      "購入意思が曖昧で不動産経営無",
      "相続人が主導だった",
      "これから購入を検討",
    ],
    marks: [15, 12, 9, 6, 3, 15],
  },
  {
    major: "購入時",
    minor: "購入経緯の記録（購入者・販売者もしくは融資者側）の記録がありますか？",
    questions: ["なぜ購入か記録在り", "記録は無いが明確", "記録があるが漠然としている", "節税が目的", "もやもや", "これから購入を検討"],
    marks: [15, 12, 9, 6, 3, 15],
  },
  {
    major: "購入時",
    minor: "購入経緯の記録（購入者・販売者もしくは融資者側）の記録がありますか？",
    questions: ["相続専門税理士で戦える", "相続専門税理士", "相続が専門でないが相続も扱っている", "国税OB税理士", "相続に慣れていない", "これから購入を検討"],
    marks: [10, 8, 6, 4, 2, 10],
  },
  {
    major: "申告時",
    minor: "相続税申告時に担当された税理士について教えて下さい。",
    questions: [
      "相続専門税理士で戦える",
      "相続専門税理士",
      "相続が専門でないが相続も扱っている",
      "国税OB税理士",
      "相続に慣れていない",
      "まだ相続は発生していない",
    ],
    marks: [15, 12, 9, 6, 3, 15],
  },
  {
    major: "申告時",
    minor: "相続税申告時に担当された税理士について教えて下さい。",
    questions: [
      "購入前税額の７０％未満",
      "購入前税額の７０％以上",
      "購入前税額の８０％以上",
      "購入前税額の９０％以上",
      "購入前税額の１００％",
      "まだ相続は発生していない",
    ],
    marks: [10, 8, 6, 4, 2, 10],
  },
  {
    major: "申告後",
    minor: "相続後に物件を売却された場合、その年数をお答えください",
    questions: [
      "相続後（５年超）",
      "相続後（5年以内）",
      "相続後（3年以内）",
      "相続後（2年以内）",
      "相続後（申告期限以内）",
      "まだ相続は発生していない、または物件を今も保有している",
    ],
    marks: [10, 8, 6, 4, 2, 10],
  },
];
document.addEventListener("alpine:init", app);

class Quizzes {
  constructor(quizzes) {
    this.quizzes = quizzes;
    this.current = 0;
    this.marks = [];
    this.current_mark = undefined;
  }
}

function app() {
  const quizzes = new Quizzes(data);
  Alpine.data("quizzes_data", () => ({
    ...quizzes,
    start: false,

    select(quiz_id, answer_id) {
      const mark = this.quizzes[quiz_id].marks[answer_id];
      this.current_mark = mark;
    },

    next() {
      const quizzesCount = this.quizzes.length;
      if (this.current < quizzesCount) {
        this.current += 1;
        this.marks.push(this.current_mark);
      }
      this.current_mark = undefined;
    },

    prev() {
      if (this.current > 0) {
        this.current_mark = this.marks.pop();
        this.current -= 1;
      }
    },

    calculate_result() {
      this.next();
      const result = this.marks.reduce((a, b) => a + b, 0);

      return result === 100 ? "8割！" : result > 80 ? "6割！" : result > 60 ? "4割！" : result > 40 ? "2割！" : "負け戦！";
    },

    reset() {
      this.current_mark = undefined;
      this.current = 0;
      this.marks = [];
      this.start = false;

      document.querySelectorAll(".answer input[type=radio]:checked").forEach((ans) => (ans.checked = 0));
    },
  }));
}
// ----------------------------------

// consulting tab 
const tabContainer =document.querySelector('.tab_container');
const tabHeader = Array.from(document.querySelectorAll('.tab_header_title'));
const tabContents = Array.from(document.querySelectorAll('.tab_content'));
const tabDatas = [];

// append child 
let div= document.createElement('div');
div.className = 'show_tab_content'
tabContainer.insertAdjacentElement('afterend', div)
// selectDOM of append Element
const ShowTabContent = document.querySelector('.show_tab_content');
// some logics
tabContents.forEach(function(data){
  tabDatas.push(data.innerHTML)
});
tabContents.forEach(function(tabcontent){
  tabcontent.classList.add("content_hide")
});
const checkActiveTab = function(){
  ShowTabContent.innerHTML = ''
    tabHeader.forEach(function(tab , idx){
            if(tab.classList.contains("active")){
              ShowTabContent.innerHTML = tabDatas[idx]
             }
    });
};
checkActiveTab();
tabHeader.forEach(function(tab){
    tab.addEventListener("click",function(e){
           tabHeader.forEach(function(inTab){
                 inTab.classList.remove("active");
            });
         tab.classList.add('active');
         checkActiveTab();
    });
});
// ----------------------