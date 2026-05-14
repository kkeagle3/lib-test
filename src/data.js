export const RESULTS = {
  SILENT: { 
    name: "공부 괴물", 
    desc: "숨소리조차 유죄라고 믿는 당신에게 적막은 최고의 복지입니다. 누군가 옆에서 펜만 딸깍거려도 미간이 찌푸려지는 무서운 집중력의 소유자!", 
    emoji: "🤫",
    place: "중앙도서관 신관 3층 제 3열람실",
    best: "ALCHEMIST",
    worst: "MARKER"
  },
  AMBIENT: { 
    name: "도서관 엠비언트 중독", 
    desc: "적당한 백색소음과 타인의 시선이 있어야 뇌가 돌아갑니다. 너무 조용하면 오히려 불안해서 잠이 오는 스타일!", 
    emoji: "🎧",
    place: "중앙도서관 신관 1층 카페",    
    best: "APPLE",
    worst: "SILENT"
  },
  APPLE: { 
    name: "경대 보부상", 
    desc: "공부는 장비빨. 일단 노트북, 패드, 워치까지 모든 배터리가 100%여야 마음이 편안해지는 디지털 유목민입니다.", 
    emoji: "🍎",
    place: "중앙도서관 신관 2층 제 2열람실",    
    best: "AMBIENT",
    worst: "TOURIST"
  },
  MARKER: { 
    name: "스터디 협업러", 
    desc: "말을 해야 지식이 뇌에 박히는 강의 호소인. 혼자 하면 죽어도 안 하지만, 남이랑 약속하면 초인적인 힘을 발휘합니다.", 
    emoji: "🖍️",
    place: "중앙도서관 신관 1층 스터디룸",
    best: "TOURIST",
    worst: "SILENT"
  },
  ALCHEMIST: { 
    name: "시험기간 생존러", 
    desc: "평소엔 안 보이다가 시험 기간에만 출몰하는 희귀종. 카페인으로 생명력을 연성하며 지하 1층에서 거주 중이라는 소문이 있습니다.", 
    emoji: "🧪",
    place: "중앙도서관 신관 지하 1층 제 1열람실",
    best: "SILENT",
    worst: "APPLE"
  },
  TOURIST: { 
    name: "도서관 명예 관광객", 
    desc: "에어컨 바람과 쾌적함을 찾아 떠나온 힐링러. 당신에게 도서관은 공부하는 곳이라기보다 학교에서 가장 시원하고 조용한 피서지입니다.", 
    emoji: "🌴",
    place: "중앙도서관 구관 1층",
    best: "MARKER",
    worst: "APPLE"
  },
};

export const QUESTIONS = [
  { 
    text: "도서관에 도착하자마자\n당신이 가장 먼저 하는 행동은?", 
    options: [
      { text: "가방에서 노트북, 패드, 충전기부터 세팅한다", type: "APPLE", weight: 2 },
      { text: "일단 책 한 권만 딱 펴고 바로 몰입한다", type: "SILENT", weight: 1 }
    ] 
  },
  { 
    text: "공강 시간, 당신이\n도서관으로 향하는 진짜 이유는?", 
    options: [
      { text: "에어컨/히터 쐬면서 한숨 자거나 쉬려고", type: "TOURIST", weight: 2 },
      { text: "조금이라도 과제나 복습을 미리 해두려고", type: "ALCHEMIST", weight: 1 }
    ] 
  },
  { 
    text: "자리를 잡을 때\n가장 중요하게 생각하는 조건은?", 
    options: [
      { text: "주변에 사람이 적고 극도로 조용한 곳", type: "SILENT", weight: 1 },
      { text: "의자가 푹신하거나 잠자기 편한 구석 자리", type: "TOURIST", weight: 2 }
    ] 
  },
  { 
    text: "공부하다가 아는 사람을\n마주쳤을 때 당신은?", 
    options: [
      { text: "눈인사만 하고 재빨리 공부 모드 복귀", type: "SILENT", weight: 1 },
      { text: "잠깐이라도 같이 떠들어야 살 것 같다", type: "MARKER", weight: 2 }
    ] 
  },
  { 
    text: "필기할 때 선호하는 도구는?", 
    options: [
      { text: "종이와 펜으로 직접 써야 직성이 풀린다", type: "SILENT", weight: 1 },
      { text: "패드와 키보드로 깔끔하게 정리하는 게 좋다", type: "APPLE", weight: 1 }
    ] 
  },
  { 
    text: "옆자리 사람이 주기적으로\n'바스락' 소리를 낸다면?", 
    options: [
      { text: "신경 쓰여서 속으로 화를 참거나 자리를 옮긴다", type: "SILENT", weight: 2 },
      { text: "이어폰 볼륨을 높이고 내 할 일에 집중한다", type: "AMBIENT", weight: 2 }
    ] 
  },
  { 
    text: "공부할 때 기본 모드는?", 
    options: [
      { text: "혼자 조용히 파고드는 Single 모드", type: "SILENT", weight: 1 },
      { text: "친구랑 같이 감시하며(?) 공부하는 Multi 모드", type: "MARKER", weight: 1 }
    ] 
  },
  { 
    text: "도서관에서 가장 행복한 순간은?", 
    options: [
      { text: "목표했던 공부 분량을 완벽히 끝냈을 때", type: "ALCHEMIST", weight: 1 },
      { text: "공부하다가 나가서 마시는 커피와 수다 타임", type: "TOURIST", weight: 2 }
    ] 
  },
  { 
    text: "공부하다 배가 고파지면 당신은?", 
    options: [
      { text: "빨리 먹고 복귀해서 흐름을 이어간다", type: "ALCHEMIST", weight: 1 },
      { text: "맛집을 찾아 학교 밖으로 나가는 게 진정한 휴식", type: "TOURIST", weight: 1 }
    ] 
  },
  { 
    text: "시험 3일 전, 당신의 상태는?", 
    options: [
      { text: "평소와 다름없는 루틴을 유지한다", type: "SILENT", weight: 1 },
      { text: "도서관이 집이고 집이 도서관이 된다", type: "ALCHEMIST", weight: 2 }
    ] 
  },
  { 
    text: "도서관 엠비언트 소리에 대한 생각은?", 
    options: [
      { text: "완전 적막보다는 적당한 소음이 있어야 잘 된다", type: "AMBIENT", weight: 2 },
      { text: "카페 같은 분위기보다 열람실의 긴장감이 좋다", type: "SILENT", weight: 1 }
    ] 
  },
  { 
    text: "오늘 공부가 너무 안 될 때 당신은?", 
    options: [
      { text: "장소를 옮기거나 새로운 카페인을 투입한다", type: "ALCHEMIST", weight: 1 },
      { text: "오늘은 날이 아니다 싶어 과감히 짐을 싼다", type: "TOURIST", weight: 2 }
    ] 
  }
];