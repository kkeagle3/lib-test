export const RESULTS = {
  SILENT: { 
    name: "공부 괴물", 
    desc: "숨소리조차 유죄라고 믿는 당신에게 적막은 최고의 복지입니다.\n누가 옆에서 펜만 딸깍거려도 미간이 찌푸려지는 무서운 집중력의 소유자!", 
    emoji: "🤫",
    place: "중앙도서관 신관 3층 제 3열람실",
    best: "ALCHEMIST",
    worst: "MARKER"
  },
  AMBIENT: { 
    name: "도서관 엠비언트 중독", 
    desc: "적당한 백색소음과 타인의 시선이 있어야 뇌가 가동됩니다.\n너무 조용하면 오히려 불안해서 잠이 오는 스타일! 탁 트인 오픈 테이블을 선호하시네요.", 
    emoji: "🎧",
    place: "중앙도서관 신관 1층 카페",    
    best: "APPLE",
    worst: "SILENT"
  },
  APPLE: { 
    name: "경대 보부상", 
    desc: "공부는 장비빨. 일단 모든 기기의 배터리가 100%여야 마음이 편안해집니다.\n자리에 앉자마자 콘센트부터 찾는 당신은 도서관의 디지털 유목민!", 
    emoji: "🍎",
    place: "중앙도서관 신관 2층 제 2열람실",    
    best: "AMBIENT",
    worst: "TOURIST"
  },
  MARKER: { 
    name: "스터디 협업러", 
    desc: "말을 해야 지식이 뇌에 박히는 강의 호소인.\n혼자 하면 죽어도 안 하지만, 남이랑 약속하면 초인적인 힘을 발휘하는 타입입니다.", 
    emoji: "🖍️",
    place: "중앙도서관 신관 1층 스터디룸",
    best: "TOURIST",
    worst: "SILENT"
  },
  ALCHEMIST: { 
    name: "시험기간 생존러", 
    desc: "평소엔 안 보이다가 시험 기간에만 출몰하는 희귀종.\n카페인으로 생명력을 연성하며, 마감 직전의 스릴을 즐기는 벼락치기의 달인입니다.", 
    emoji: "🧪",
    place: "중앙도서관 신관 지하 1층 제 1열람실",
    best: "SILENT",
    worst: "APPLE"
  },
  TOURIST: { 
    name: "도서관 명예 관광객", 
    desc: "에어컨 바람과 조용한 분위기를 찾아 떠나온 힐링러.\n당신에게 도서관은 공부하는 곳이라기보다 학교에서 가장 시원하고 잠자기 좋은 피서지입니다.", 
    emoji: "🌴",
    place: "중앙도서관 구관 1층",
    best: "MARKER",
    worst: "APPLE"
  },
};

export const QUESTIONS = [
  { 
    text: "도서관에 도착하자마자\n당신이 가장 먼저 찾는 것은?", 
    options: [
      { text: "내 모든 장비를 연결할 '콘센트' 자리", weight: { APPLE: 2, AMBIENT: 1}},
      { text: "최대한 구석진 곳의 '독립된' 자리", weight: {SILENT: 2, TOURIST: 1} }
    ] 
  },
  { 
    text: "공강 시간, 당신이\n도서관으로 향하는 진짜 이유는?", 
    options: [
      { text: "에어컨/히터 쐬면서 편하게 한숨 자려고", type: "TOURIST", weight: 2 },
      { text: "다음 수업 과제나 퀴즈를 미리 끝내려고", type: "SILENT", weight: 1 }
    ] 
  },
  { 
    text: "당신이 선호하는\n학습 공간의 분위기는?", 
    options: [
      { text: "사방이 막힌 폐쇄석", type: "SILENT", weight: 1 },
      { text: "탁 트인 개방석", type: "AMBIENT", weight: 2 }
    ] 
  },
  { 
    text: "공부하다가 아는 사람을\n마주쳤을 때 당신은?", 
    options: [
      { text: "눈인사만 하고 재빨리 공부 모드 복귀", type: "SILENT", weight: 1 },
      { text: "잠깐이라 의자 빼고 앉아서 근황 토크", type: "MARKER", weight: 2 }
    ] 
  },
  { 
    text: "자리에 앉아 가방을 열었을 때\n당신의 소지품 상태는?", 
    options: [
      { text: "노트북, 패드, 보조배터리 등 기기가 가득", type: "APPLE", weight: 2 },
      { text: "책 한 권, 필통 하나로 끝내는 단촐함", type: "SILENT", weight: 1 }
    ] 
  },
  { 
    text: "옆자리 사람이 주기적으로\n'바스락' 소리를 낸다면?", 
    options: [
      { text: "신경 쓰여서 속으로 화를 참거나 자리를 옮긴다", type: "SILENT", weight: 2 },
      { text: "백색소음이라 생각하며 내 할 일에 집중한다", type: "AMBIENT", weight: 2 }
    ] 
  },
  { 
    text: "공부 효율이 가장\n잘 나오는 환경은?", 
    options: [
      { text: "아무도 나를 방해하지 않는 1인 모드", type: "SILENT", weight: 1 },
      { text: "서로 감시(?)하며 자극받는 스터디 모드", type: "MARKER", weight: 2 }
    ] 
  },
  { 
    text: "도서관에서 가장 행복한 순간은?", 
    options: [
      { text: "계획했던 공부 분량을 '완독'했을 때", type: "ALCHEMIST", weight: 1 },
      { text: "잠깐 나가서 친구랑 커피 마시는 시간", type: "TOURIST", weight: 2 }
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
    text: "도서관에 머무는 시간은 보통?", 
    options: [
      { text: "한 번 앉으면 몇 시간은 요지부동", type: "SILENT", weight: 1 },
      { text: "중간중간 자주 리프레시를 하러 나가는 편", type: "TOURIST", weight: 2 }
    ] 
  },
  { 
    text: "오늘 공부가 유독 안 된다면?", 
    options: [
      { text: "카페인을 때려 붓고 어떻게든 앉아 있는다", type: "ALCHEMIST", weight: 1 },
      { text: "이미 뇌가 굳었다. 쾌적함을 즐기다 조기 퇴근", type: "TOURIST", weight: 2 }
    ] 
  }
];