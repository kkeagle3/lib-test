export const RESULTS = {
  FOCUS: { 
    name: "딥포커스 크부기", 
    desc: `도서관에 앉는 순간 주변의 시공간이 멈추는 분이시군요!
    한 번 자리를 잡으면 엉덩이를 떼지 않는 무서운 집중력의 소유자입니다.
    계획한 분량을 끝내기 전까지는 절대 일어나지 않는 도서관의 터줏대감입니다.`, 
    emoji: "🗿",
    img: "/images/kbg_focus.png",
    place: "중앙도서관 신관 3층 제 3열람실",
    best: "OWL",
    worst: "WITH"
  },
  CAFE: { 
    name: "카공 ON 크부기", 
    desc: `너무 적막한 곳보다는 적당한 백색소음이 있어야 뇌가 깨어나는 타입입니다!
    남들이 공부하는 모습이 시야에 들어와야 적당한 긴장감을 유지하며 집중력이 상승합니다. 
    노트북 타이핑 소리와 책장 넘기는 소리가 어우러진 오픈 테이블이 당신의 주 무대입니다.`,
    emoji: "🎧",
    img: "/images/kbg_cafe.png",
    place: "중앙도서관 신관 1층 카페",    
    best: "WITH",
    worst: "FOCUS"
  },
  WITH: { 
    name: "스터디 with 크부기", // 🤝 누락되었던 이름을 논리적으로 채워 넣었습니다.
    desc: `혼자 하는 공부보다 '함께'의 힘을 믿는 분이시군요!
    친구와 모르는 것을 서로 설명해 주거나, 스터디원들과 나란히 앉아 있을 때 시너지가 폭발합니다. 
    말을 하면서 지식을 정리하는 것을 선호하며, 서로를 자극하는 건강한 경쟁을 즐기는 타입입니다.`,
    emoji: "🖍️",
    img: "/images/kbg_studywithkbg.png",
    place: "중앙도서관 신관 1층 스터디룸",
    best: "TOURIST",
    worst: "FOCUS"
  },
  OWL: { 
    name: "호반우 옆 올빼미", 
    desc: `모두가 떠난 뒤에도 도서관의 불을 밝히는 진정한 생존형 공부러입니다!
    평소엔 여유롭다가도 시험 기간만 되면 초인적인 힘을 발휘해 지식을 뇌에 연성해 넣습니다. 
    카페인과 에너지 드링크로 생명력을 치환하며, 마감 직전의 스릴을 즐기는 벼락치기의 달인입니다.`,
    emoji: "🦉",
    img: "/images/kbg_owl.png",
    place: "중앙도서관 신관 지하 1층 제 1열람실",
    best: "FOCUS",
    worst: "TOURIST"
  },
  TOURIST: { 
    name: "도서관 명예 관광객", 
    desc: "에어컨 바람과 조용한 분위기를 찾아 떠나온 힐링러...", 
    emoji: "🌴",
    img: "/images/kbg_tourist.png",
    place: "중앙도서관 구관 1층 라운지 소파존",
    best: "WITH",
    worst: "OWL"
  }
};

export const QUESTIONS = [
  { 
    text: "도서관에 도착하자마자\n당신이 가장 먼저 찾는 것은?", 
    options: [
      { text: "노트북과 전자기기를 연결할 '콘센트' 자리", weights: { CAFE: 2, WITH: 1 } },
      { text: "최대한 구석진 곳의 '독립된' 자리", weights: { FOCUS: 2, TOURIST: 1 } }
    ] 
  },
  { 
    text: "공강 시간, 당신이\n도서관으로 향하는 진짜 이유는?", 
    options: [
      { text: "에어컨/히터 쐬면서 편하게 한숨 자려고", weights: { TOURIST: 4, CAFE: 1 } },
      { text: "다음 수업 과제나 퀴즈를 미리 끝내려고", weights: { FOCUS: 2 } }
    ] 
  },
  { 
    text: "당신이 선호하는\n학습 공간의 분위기는?", 
    options: [
      { text: "사방이 막힌 폐쇄석", weights: { FOCUS: 1, OWL: 1 } },
      { text: "탁 트인 개방석", weights: { WITH: 2, CAFE: 1 } }
    ] 
  },
  {
    text: "나의 이상적인 공부 루틴은?",
    options: [
      { text: "남들보다 일찍 시작해서 오전 시간을 활용한다.", weights: { CAFE: 3, TOURIST: 1 } },
      { text: "하루 일과를 끝낸 후 밤에 집중해서 마무리한다.", weights: { OWL: 3 } }
    ]
  },
  { 
    text: "공부를 시작하려는데 주변에서 작은 대화 소리가 들린다.", 
    options: [
      { text: "집중이 흐트러져 이어폰을 끼거나 자리를 옮기고 싶다.", weights: { FOCUS: 2 } },
      { text: "적당한 백색소음이라 생각하며 크게 신경 쓰지 않는다.", weights: { WITH: 2, CAFE: 1 } }
    ] 
  },
  { 
    text: "공부 효율이 가장\n잘 올라가는 환경은?", 
    options: [
      { text: "아무에게도 방해받지 않고 혼자 집중하는 1인 집중 모드", weights: { FOCUS: 2 } },
      { text: "친구들과 지식을 나누며 시너지를 내는 스터디 모드", weights: { WITH: 3 } }
    ] 
  },
  { 
    text: "도서관에서 가장 행복한 순간은?", 
    options: [
      { text: "계획했던 공부 분량을 '완독'했을 때", weights: { OWL: 2 } },
      { text: "잠깐 나가서 친구랑 커피 마시는 시간", weights: { TOURIST: 2, WITH: 2 } }
    ] 
  },
  { 
    text: "공부하다 배가 고파지면 당신은?", 
    options: [
      { text: "흐름이 끊기기 전에 빨리 먹고 복귀한다", weights: { OWL: 2 } },
      { text: "맛집을 찾아 학교 밖으로 나가는 게 진정한 휴식", weights: { TOURIST: 2, CAFE: 2 } }
    ] 
  },
  { 
    text: "시험 3일 전, 당신의 상태는?", 
    options: [
      { text: "평소와 다름없는 루틴을 유지한다", weights: { WITH: 2, CAFE: 2 } }, 
      { text: "도서관이 집이고 집이 도서관이 된다", weights: { OWL: 3 } }
    ] 
  },
  { 
    text: "도서관에 머무는 시간은 보통?", 
    options: [
      { text: "한 번 앉으면 몇 시간은 요지부동", weights: { FOCUS: 2, OWL: 1 } },
      { text: "중간중간 자주 리프레시를 하러 나가는 편", weights: { TOURIST: 2, CAFE: 1 } }
    ] 
  },
  { 
    text: "오늘 공부가 유독 안 된다면?", 
    options: [
      { text: "카페인을 때려 붓고 어떻게든 앉아 있는다", weights: { FOCUS: 2, OWL: 1 } },
      { text: "이미 뇌가 굳었다. 쾌적함을 즐기다 조기 퇴근", weights: { TOURIST: 3, WITH: 1 } }
    ] 
  }
];