/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "윤건웅",
    nameEn: "Yun Geonung",
    father: "윤왕진",
    mother: "장경선",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "심다혜",
    nameEn: "Shim Dahye",
    father: "심용선",
    mother: "이복녀",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-09-12",
    time: "16:30",
    venue: "소풍컨벤션웨딩",
    hall: "7층 베일리홀",
    address: "경기 부천시 원미구 송내대로 239",
    tel: "032-624-7777",
    mapLinks: {
      kakao: "https://kko.to/1KjFyEgWas",
      naver: "https://naver.me/G0DXk3Wa"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로를 아껴주고 사랑하며 함께\n" +
        "걸어갈 동반자를 만났습니다.\n\n" +
        "따뜻한 사랑과 배려로\n" +
        "새로운 시작을 함께하려 합니다.\n\n" +
        "이 소중한 순간을 사랑하는 가족과\n" +
        "친구들과 함께 나누고 싶습니다.\n\n" +
        "바쁘시겠지만 귀한 걸음 하시어\n" +
        "저희의 새로운 출발을\n" +
        "축복해 주시면 감사하겠습니다."
  },

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "윤건웅", bank: "국민은행", number: "748902-00-063187" },
      { role: "아버지", name: "윤왕진", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "장경선", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "심다혜", bank: "국민은행", number: "648401-01-459237" },
      { role: "아버지", name: "심용선", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "이복녀", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "건웅 ♥ 다혜 결혼합니다",
    description: "2026년 9월 12일, 소중한 분들을 초대합니다."
  },

  // ── 갤러리 이미지 사이즈 ──
  gallerySize: 15
};
