const questionsRaw = [
  {
    id: 1,
    code: `console.log("Hello, world!");`,
    options: ["世界にあいさつした", "コンソールを壊した"],
    correct: 0,
    hint: "console.log は“表示”の意味だよ！",
  },
  {
    id: 2,
    code: `let mood = "happy";`,
    options: ['moodって変数に「happy」を入れた', 'happyって人にmoodを送った'],
    correct: 0,
    hint: "letは“変数を宣言”するキーワード",
  },
  {
    id: 3,
    code: `if (hungry) { eat(); }`,
    options: ["お腹すいたら食べる", "食べたらお腹すく"],
    correct: 0,
    hint: "ifは「もし〜なら」の意味",
  },
  {
    id: 4,
    code: `if (sunny) { goOutside(); } else { stayHome(); }`,
    options: ["晴れたら外出、それ以外はおうち", "外出したら晴れる"],
    correct: 0,
    hint: "elseは“それ以外”の処理をするよ",
  },
  {
    id: 5,
    code: `for(let i=0; i<3; i++){console.log("Good job!");}`,
    options: ['3回“Good job!”って褒めてる', '3秒我慢してる'],
    correct: 0,
    hint: "forは繰り返す処理だよ！",
  },
  {
    id: 6,
    code: `while (notAsleep) { countSheep(); }`,
    options: ["眠くなるまで羊を数え続ける", "羊が寝るまで待つ"],
    correct: 0,
    hint: "whileは“〜の間ずっと”って意味",
  },
  {
    id: 7,
    code: `function greet(name) { return "Hi, " + name; }`,
    options: ["nameって名前にHiをつけて返す", "名前を返すだけの関数"],
    correct: 0,
    hint: "+で文字列つなげてるよ！",
  },
  {
    id: 8,
    code: `function add(a, b) { return a + b; }`,
    options: ["足し算して結果を返す", "aとbを並べる"],
    correct: 0,
    hint: "+は数字だと足し算になる",
  },
  {
    id: 9,
    code: `if(crush.seesMe){ blush(); }`,
    options: ["好きな人が見てたら赤面する", "見られたら攻撃する"],
    correct: 0,
    hint: "crushは“好きな人”って意味にもなる",
  },
  {
    id: 10,
    code: `setTimeout(() => sleep(), 86400000);`,
    options: ["1日後に寝る", "すぐに寝る"],
    correct: 0,
    hint: "",
  },
  {
    id: 11,
    code: `let x = 5;\nif (true) {\n  let x = 10;\n}\nconsole.log(x);`,
    options: ["5が出力される", "10が出力される"],
    correct: 0,
    hint: "letにはブロックスコープがあるよ！",
  },
  {
    id: 12,
    code: `const a = "5";\nconst b = 5;\nconsole.log(a == b);`,
    options: ["trueが出力される", "falseが出力される"],
    correct: 0,
    hint: "== は型を無視して比較するよ",
  },
  {
    id: 13,
    code: `const value = false || "Hello";\nconsole.log(value);`,
    options: [`"Hello" が出力される`, "false が出力される"],
    correct: 0,
    hint: "|| は左が偽なら右を返す！",
  },
  {
    id: 14,
    code: `function test() {\n  return;\n  "Hello";\n}\nconsole.log(test());`,
    options: ["undefined", `"Hello"`],
    correct: 0,
    hint: "returnの後は無視される…かも？",
  },
  {
    id: 15,
    code: `let count = 0;\nfunction increment() {\n  count++;\n}\nincrement();\nincrement();\nconsole.log(count);`,
    options: ["2", "0"],
    correct: 0,
    hint: "count はグローバル変数になってるよ！",
  }
];



// 2. シャッフル関数（そのままコピペ）
function shuffleArray(arr) {
  return arr
    .map((v) => ({ v, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ v }) => v);
}

function shuffleQuestionOptions(rawQuestion) {
  const options = [...rawQuestion.options];
  const correctAnswerText = options[rawQuestion.correct];
  
  // シャッフル
  const shuffled = shuffleArray(options);
  // 正解選択肢のインデックスを再計算
  const newCorrectIndex = shuffled.findIndex(opt => opt === correctAnswerText);
  
  return {
    ...rawQuestion,
    options: shuffled,
    correct: newCorrectIndex,
  };
}

// 3. シャッフル済みのquestionsをエクスポート
const questions = questionsRaw.map(shuffleQuestionOptions);
export default questions;




