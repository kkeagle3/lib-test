export const RESULTS = {
  SILENT: { 
    name: "공부 괴물", 
    desc: "도서관에 앉는 순간 주변의 시공간이 멈추는 분이시군요!\n한 번 자리를 잡으면 엉덩이를 떼지 않는 무서운 집중력의 소유자입니다. 숨소리조차 조심스러운 정적 속에서 최고의 효율을 발휘하며, 계획한 분량을 끝내기 전까지는 절대 일어나지 않는 도서관의 터줏대감입니다.", 
    emoji: "🗿",
    img: "images/kbg_focus.png",
    place: "중앙도서관 신관 3층 제 3열람실",
    best: "ALCHEMIST",
    worst: "MARKER"
  },
  AMBIENT: { 
    name: "도서관 엠비언트 중독", 
    desc: "너무 적막한 곳보다는 적당한 백색소음이 있어야 뇌가 깨어나는 타입입니다!\n남들이 공부하는 모습이 시야에 들어와야 적당한 긴장감을 유지하며 집중력이 상승합니다. 노트북 타이핑 소리와 책장 넘기는 소리가 어우러진 오픈 테이블이 당신의 주 무대입니다.",
    emoji: "🎧",
    img: "images/kbg_cafe.png",
    place: "중앙도서관 신관 1층 카페",    
    best: "APPLE",
    worst: "SILENT"
  },
  APPLE: { 
    name: "경대 보부상", 
    desc: "공부는 장비빨! 노트북, 태블릿, 독서대까지... 가방 무게가 곧 당신의 열정입니다.\n자리에 앉자마자 콘센트 위치부터 확인하고 완벽하게 세팅을 마쳐야 비로소 공부를 시작할 마음이 생깁니다. 모든 기기의 배터리가 100%일 때 가장 마음이 편안해집니다.",    
    emoji: "🍎",
    img: "images/kbg_zimcarry.png",
    place: "중앙도서관 신관 2층 제 2열람실",    
    best: "AMBIENT",
    worst: "TOURIST"
  },
  MARKER: { 
    name: "스터디 협업러", 
    desc: "혼자 하는 공부보다 '함께'의 힘을 믿는 분이시군요!\n친구와 모르는 것을 서로 설명해 주거나, 스터디원들과 나란히 앉아 있을 때 시너지가 폭발합니다. 말을 하면서 지식을 정리하는 것을 선호하며, 서로를 자극하는 건강한 경쟁을 즐기는 타입입니다.",
    emoji: "🖍️",
    img: "/images/kbg_studywithkbg.png",
    place: "중앙도서관 신관 1층 스터디룸",
    best: "TOURIST",
    worst: "SILENT"
  },
  ALCHEMIST: { 
    name: "호반우 옆 올빼미", 
    desc: "모두가 떠난 뒤에도 도서관의 불을 밝히는 진정한 생존형 공부러입니다!\n평소엔 여유롭다가도 시험 기간만 되면 초인적인 힘을 발휘해 지식을 뇌에 연성해 넣습니다. 카페인과 에너지 드링크로 생명력을 치환하며, 마감 직전의 스릴을 즐기는 벼락치기의 달인입니다.",
    emoji: "🦉",
    img: "/images/kbg_owl.png",
    place: "중앙도서관 신관 지하 1층 제 1열람실",
    best: "SILENT",
    worst: "APPLE"
  },
  TOURIST: { 
  name: "도서관 명예 관광객", 
  desc: "에어컨 바람과 조용한 분위기를 찾아 떠나온 힐링러...", 
  emoji: "🌴",
  img: "/images/kbg_tourist.png", // 👈 여기를 .png로 수정
  place: "중앙도서관 구관 1층 라운지 소파존",
  best: "MARKER",
  worst: "APPLE"
  },
};

export const QUESTIONS = [
  { 
    text: "도서관에 도착하자마자\n당신이 가장 먼저 찾는 것은?", 
    options: [
      // 주의: weight가 아니라 weights여야 합니다.
      { text: "내 모든 장비를 연결할 '콘센트' 자리", weights: { APPLE: 2, AMBIENT: 1 } },
      { text: "최대한 구석진 곳의 '독립된' 자리", weights: { SILENT: 2, TOURIST: 1 } }
    ] 
  },
  { 
    text: "공강 시간, 당신이\n도서관으로 향하는 진짜 이유는?", 
    options: [
      { text: "에어컨/히터 쐬면서 편하게 한숨 자려고", weights: { TOURIST: 2, AMBIENT: 1 } },
      { text: "다음 수업 과제나 퀴즈를 미리 끝내려고", weights: { SILENT: 2, ALCHEMIST: 1 } }
    ] 
  },
  { 
    text: "당신이 선호하는\n학습 공간의 분위기는?", 
    options: [
      { text: "사방이 막힌 폐쇄석", weights: { SILENT: 2, ALCHEMIST: 1 } },
      { text: "탁 트인 개방석", weights: { AMBIENT: 2, MARKER: 1 } }
    ] 
  },
  { 
    text: "공부하다가 아는 사람을\n마주쳤을 때 당신은?", 
    options: [
      { text: "눈인사만 하고 재빨리 공부 모드 복귀", weights: { SILENT: 2, ALCHEMIST: 1 } },
      { text: "잠깐이라 의자 빼고 앉아서 근황 토크", weights: { MARKER: 2, TOURIST: 1 } }
    ] 
  },
  { 
    text: "자리에 앉아 가방을 열었을 때\n당신의 소지품 상태는?", 
    options: [
      { text: "노트북, 패드, 보조배터리 등 기기가 가득", weights: { APPLE: 2, AMBIENT: 1 } },
      { text: "책 한 권, 필통 하나로 끝내는 단촐함", weights: { SILENT: 2, ALCHEMIST: 1 } }
    ] 
  },
  { 
    text: "옆자리 사람이 주기적으로\n'바스락' 소리를 낸다면?", 
    options: [
      { text: "신경 쓰여서 속으로 화를 참거나 자리를 옮긴다", weights: { SILENT: 2 } },
      { text: "백색소음이라 생각하며 내 할 일에 집중한다", weights: { AMBIENT: 2, TOURIST: 1 } }
    ] 
  },
  { 
    text: "공부 효율이 가장\n잘 나오는 환경은?", 
    options: [
      { text: "아무도 나를 방해하지 않는 1인 모드", weights: { SILENT: 2, ALCHEMIST: 1 } },
      { text: "서로 감시(?)하며 자극받는 스터디 모드", weights: { MARKER: 2, AMBIENT: 1 } }
    ] 
  },
  { 
    text: "도서관에서 가장 행복한 순간은?", 
    options: [
      { text: "계획했던 공부 분량을 '완독'했을 때", weights: { ALCHEMIST: 2, SILENT: 1 } },
      { text: "잠깐 나가서 친구랑 커피 마시는 시간", weights: { TOURIST: 2, MARKER: 1 } }
    ] 
  },
  { 
    text: "공부하다 배가 고파지면 당신은?", 
    options: [
      { text: "빨리 먹고 복귀해서 흐름을 이어간다", weights: { ALCHEMIST: 2, SILENT: 1 } },
      { text: "맛집을 찾아 학교 밖으로 나가는 게 진정한 휴식", weights: { TOURIST: 2, MARKER: 1 } }
    ] 
  },
  { 
    text: "시험 3일 전, 당신의 상태는?", 
    options: [
      { text: "평소와 다름없는 루틴을 유지한다", weights: { SILENT: 2, APPLE: 1 } },
      { text: "도서관이 집이고 집이 도서관이 된다", weights: { ALCHEMIST: 3 } }
    ] 
  },
  { 
    text: "도서관에 머무는 시간은 보통?", 
    options: [
      { text: "한 번 앉으면 몇 시간은 요지부동", weights: { SILENT: 2, ALCHEMIST: 1 } },
      { text: "중간중간 자주 리프레시를 하러 나가는 편", weights: { TOURIST: 2, AMBIENT: 1 } }
    ] 
  },
  { 
    text: "오늘 공부가 유독 안 된다면?", 
    options: [
      { text: "카페인을 때려 붓고 어떻게든 앉아 있는다", weights: { ALCHEMIST: 2, SILENT: 1 } },
      { text: "이미 뇌가 굳었다. 쾌적함을 즐기다 조기 퇴근", weights: { TOURIST: 2 } }
    ] 
  }
];