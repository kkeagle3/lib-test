export const RESULTS = {
  SILENT: { 
    name: "공부 괴물", 
    desc: "누가 업어가도 모를 정도로 몰입하는 딥포커스형 인간. \n 숨소리조차 유죄라고 믿는 당신에게 적막은 최고의 복지입니다.", 
    emoji: "🤫",
    place: "중앙도서관 신관 3층 제 3열람실",
    best: "ALCHEMIST",
    worst: "MARKER"
  },
  AMBIENT: { 
    name: "도서관 엠비언트 중독", 
    desc: "적당한 백색소음과 타인의 시선이 있어야 뇌가 가동됩니다. \n 도서관은 당신에게 거대한 카공 플레이스!", 
    emoji: "🎧",
    place: "중앙도서관 신관 1층 카페",    
    best: "APPLE",
    worst: "SILENT"
  },
  APPLE: { 
    name: "경대 보부상", 
    desc: "장비 세팅만 30분. \n 일단 모든 기기의 배터리가 100%여야 마음이 편안해지는 장비의 제왕입니다.", 
    emoji: "🍎",
    place: "중앙도서관 신관 2층 제 2열람실",    
    best: "AMBIENT",
    worst: "TOURIST"
  },
  MARKER: { 
    name: "스터디 협업러", 
    desc: "말을 해야 지식이 뇌에 박히는 강의 호소인. \n 당신에게 스터디룸 예약은 생존권과 같습니다.", 
    emoji: "🖍️",
    place: "중앙도서관 신관 1층 스터디룸",
    best: "TOURIST",
    worst: "SILENT"
  },
  ALCHEMIST: { 
    name: "시험기간 생존러", 
    desc: "카페인으로 생명력을 연성합니다. \n 시험 3일 전부터는 지하 1층에서 거주한다는 소문이..", 
    emoji: "🧪",
    place: "중앙도서관 신관 지하 1층 제 1열람실",
    best: "SILENT",
    worst: "APPLE"
  },
  TOURIST: { 
    name: "도서관 명예 관광객", 
    desc: "에어컨 바람과 쾌적함을 찾아 떠나온 힐링러. \n 당신에게 도서관은 가장 시원한 피서지입니다.", 
    emoji: "🌴",
    place: "중앙도서관 구관 1층",
    best: "MARKER",
    worst: "APPLE"
  },
};

export const QUESTIONS = [
  { text: "도서관에서 공부할 때\n당신의 '집중 밀도'는?", options: [{ text: "한 번 앉으면 몇 시간은 요지부동", type: "SILENT", weight: 2 }, { text: "중간중간 쉬어야 효율이 나는 편", type: "AMBIENT", weight: 2 }] },
  { text: "공부하다가 자리에서\n일어나는 가장 큰 이유는?", options: [{ text: "거의 안 일어남. 필요한 건 이미 다 있음", type: "SILENT", weight: 1 }, { text: "물 마시기, 편의점 가기등 리프레시", type: "TOURIST", weight: 2 }] },
  { text: "필기할 때 당신의 스타일은?", options: [{ text: "손으로 직접 써야 기억에 남는다", type: "SILENT", weight: 1 }, { text: "타이핑과 하이라이트가 훨씬 편하다", type: "APPLE", weight: 1 }] },
  { text: "공부하다가 아는 사람을\n마주쳤을 때 당신은?", options: [{ text: "눈인사만 하고 재빨리 자리에 앉는다", type: "SILENT", weight: 1 }, { text: "잠깐이라도 같이 떠들어야 살 것 같다", type: "MARKER", weight: 2 }] },
  { text: "공부할 때 기본 모드는?", options: [{ text: "혼자 조용히 파고드는 single 모드", type: "SILENT", weight: 2 }, { text: "친구랑 같이 공부하는 multi 모드", type: "MARKER", weight: 3 }] },
  { text: "도서관에서 공부하다,\n밥을 먹을 때는?", options: [{ text: "빨리 먹고 바로 복귀한다", type: "ALCHEMIST", weight: 1 }, { text: "일단 학교 밖으로 나가 먹을걸 찾는다", type: "MARKER", weight: 1 }] },
  { text: "시험 기간,\n당신의 생존 전략은?", options: [{ text: "커피, 에너지드링크, 야식으로 버틴다", type: "ALCHEMIST", weight: 3 }, { text: "컨디션 관리가 우선, 잠은 꼭 잔다", type: "SILENT", weight: 1 }] },
  { text: "시험 3일 전,\n도서관에서의 당신은?", options: [{ text: "평소와 다름없는 루틴 유지", type: "SILENT", weight: 1 }, { text: "도서관이 집이고 집이 도서관이 된다", type: "ALCHEMIST", weight: 5 }] }
];