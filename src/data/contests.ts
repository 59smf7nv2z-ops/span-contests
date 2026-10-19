export type ContestCategory =
  | '구조설계'
  | '건축설계'
  | '친환경·에너지'
  | '도시·단지'
  | 'BIM·디지털'
  | '종합'

export type ContestStatus = 'open' | 'closing' | 'upcoming' | 'closed'

export interface Contest {
  id: string
  title: string
  organizer: string
  category: ContestCategory
  status: ContestStatus
  deadline: string
  announceDate: string
  prize: string
  eligibility: string
  teamSize: string
  summary: string
  tags: string[]
  sourceUrl: string
  featured?: boolean
}

export const categories: ContestCategory[] = [
  '구조설계',
  '건축설계',
  '친환경·에너지',
  '도시·단지',
  'BIM·디지털',
  '종합',
]

/** 샘플·참고용 공모전 목록. 일정·상금은 주최 공고 기준으로 확인하세요. */
export const contests: Contest[] = [
  {
    id: 'ksea-structure-2026',
    title: '2026 건축구조경진대회',
    organizer: '한국건축구조기술사회',
    category: '구조설계',
    status: 'upcoming',
    deadline: '2026-07-10',
    announceDate: '2026-03-01',
    prize: '본상·특별상 (예비심사 후 본심사)',
    eligibility: '전국 대학생 (건축·건축공학 중심)',
    teamSize: '팀 단위',
    summary:
      '구조 개념·구조 계획·창의성을 판넬과 발표로 평가하는 대표 건축구조 경진대회. 참가신청 7/10, 작품 접수 9/28~10/1.',
    tags: ['구조개념', '판넬', '발표'],
    sourceUrl: 'https://contest.ksea.or.kr/',
    featured: true,
  },
  {
    id: 'seismic-design-2026',
    title: '2026 구조물 내진설계 경진대회',
    organizer: '부산대학교 · 국토교통연구인프라운영원',
    category: '구조설계',
    status: 'upcoming',
    deadline: '2026-06-26',
    announceDate: '2026-05-11',
    prize: '장관상·총장상 등 · 총 상금·부상 규모 큼',
    eligibility: '전국 대학생 / 4인 1팀 (연합 가능)',
    teamSize: '4인',
    summary:
      '주제는 AI를 활용한 구조물 내진설계. 설계제안서 평가 후 온라인 발표와 진동대 실험 본선으로 진행됩니다.',
    tags: ['내진', 'AI', '진동대'],
    sourceUrl: 'https://seismic.pusan.ac.kr/sites/seismic/index.do',
    featured: true,
  },
  {
    id: 'lh-new-structure-2025',
    title: 'LH 아파트 新구조형식 공모전',
    organizer: '한국토지주택공사(LH)',
    category: '구조설계',
    status: 'closed',
    deadline: '2025-08-29',
    announceDate: '2025-07-16',
    prize: '대상 500만 원 · 우수 300만 원 · 장려 50만 원',
    eligibility: '건축학과·건축공학과 대학(원)생',
    teamSize: '2인 이하',
    summary:
      '미래 주거환경 변화에 대응하는 새로운 구조시스템 아이디어 제안. PPT 15매 이내.',
    tags: ['공동주택', '구조시스템', 'LH'],
    sourceUrl: 'https://www.lhstructure2025.co.kr',
  },
  {
    id: 'steel-structure-2026',
    title: '전국 대학생 철골구조 설계 경진대회',
    organizer: '한국강구조학회',
    category: '구조설계',
    status: 'open',
    deadline: '2026-05-15',
    announceDate: '2026-02-01',
    prize: '대상 500만 원 · 우수상·장려상',
    eligibility: '건축공학·건축학 학부 재학생',
    teamSize: '3~5인',
    summary:
      '중저층 철골 골조를 대상으로 하중 경로, 접합부, 시공성을 종합 평가하는 구조 설계 공모전입니다.',
    tags: ['철골', '접합부', '내진'],
    sourceUrl: 'https://www.kssc.or.kr',
    featured: true,
  },
  {
    id: 'concrete-idea-2026',
    title: '대학생 콘크리트 아이디어 공모전',
    organizer: '한국콘크리트학회',
    category: '구조설계',
    status: 'open',
    deadline: '2026-04-30',
    announceDate: '2026-01-20',
    prize: '대상 300만 원',
    eligibility: '대학 학부·대학원생',
    teamSize: '개인 또는 3인 이하',
    summary:
      '고성능·저탄소 콘크리트의 재료·부재·시공 아이디어를 제안하는 공모전. 실험 계획서 제출 가능.',
    tags: ['콘크리트', '재료', '저탄소'],
    sourceUrl: 'https://www.kci.or.kr',
  },
  {
    id: 'green-building-challenge',
    title: '제로에너지 건축 학생 챌린지',
    organizer: '국토교통부 · 한국에너지공단',
    category: '친환경·에너지',
    status: 'closing',
    deadline: '2026-03-28',
    announceDate: '2025-12-10',
    prize: '대상 1,000만 원 · 시행 지원',
    eligibility: '건축·건축공학·설비 전공 학생',
    teamSize: '4~6인 (지도교수 1인)',
    summary:
      '기존 학교·공공시설을 대상으로 한 ZEB 리트로핏 제안. 에너지 시뮬레이션과 LCC 분석 필수.',
    tags: ['ZEB', '리트로핏', 'LCC'],
    sourceUrl: 'https://www.energy.or.kr',
    featured: true,
  },
  {
    id: 'bim-hackathon-spring',
    title: '스마트건설 BIM 해커톤',
    organizer: '스마트건설 얼라이언스',
    category: 'BIM·디지털',
    status: 'upcoming',
    deadline: '2026-06-20',
    announceDate: '2026-04-01',
    prize: '대상 700만 원 · 인턴십 연계',
    eligibility: '대학 재학생 (건축공학 우대)',
    teamSize: '3~4인',
    summary:
      '48시간 동안 발주 시나리오 기반 BIM 모델링·충돌 검토·4D 시공 시뮬레이션을 완성합니다.',
    tags: ['BIM', '4D', '협업'],
    sourceUrl: 'https://www.molit.go.kr',
  },
  {
    id: 'urban-regen-studio',
    title: '노후 주거지 재생 스튜디오 공모',
    organizer: '서울주택도시공사',
    category: '도시·단지',
    status: 'open',
    deadline: '2026-05-08',
    announceDate: '2026-02-15',
    prize: '대상 800만 원',
    eligibility: '건축·도시·조경·건축공학 전공',
    teamSize: '2~5인',
    summary:
      '단지 단위 구조 보강, 공용부 재구성, 보행 네트워크를 아우르는 재생 마스터플랜을 요구합니다.',
    tags: ['도시재생', '구조보강', '단지'],
    sourceUrl: 'https://www.i-sh.co.kr',
  },
  {
    id: 'timber-hybrid-lab',
    title: '목조·하이브리드 구조 실험실 공모',
    organizer: '산림청 · 목재문화진흥회',
    category: '구조설계',
    status: 'open',
    deadline: '2026-07-10',
    announceDate: '2026-03-01',
    prize: '대상 400만 원 · 축소모형 제작비',
    eligibility: '학부 3학년 이상',
    teamSize: '2~4인',
    summary:
      'CLT·글루램 하이브리드 골조의 접합·내화·진동 성능을 실험·해석으로 검증하는 과제입니다.',
    tags: ['목조', 'CLT', '하이브리드'],
    sourceUrl: 'https://www.forest.go.kr',
  },
  {
    id: 'bridge-design-cup',
    title: '대학생 교량 설계·제작 컵',
    organizer: '대한토목학회 · 한국교량학회',
    category: '구조설계',
    status: 'upcoming',
    deadline: '2026-08-31',
    announceDate: '2026-05-01',
    prize: '대상 600만 원 · 현장 견학',
    eligibility: '건축공학·토목공학 학부생',
    teamSize: '4~6인',
    summary:
      '축소 모형 제작과 재하 시험을 병행하는 교량 설계 대회. 중량 대비 내하력이 핵심 지표입니다.',
    tags: ['교량', '재하시험', '모형'],
    sourceUrl: 'https://www.ksce.or.kr',
  },
  {
    id: 'campus-pavilion',
    title: '캠퍼스 파빌리온 설계·시공 공모',
    organizer: '대한건축학회',
    category: '건축설계',
    status: 'closing',
    deadline: '2026-03-20',
    announceDate: '2025-11-15',
    prize: '대상 1,200만 원 (시공비 포함)',
    eligibility: '건축·건축공학 전공 팀',
    teamSize: '5~8인',
    summary:
      '설계부터 디테일·구조 검토·시공까지 이어지는 실물 파빌리온 과제. 구조 해석서 첨부 필수.',
    tags: ['파빌리온', '시공', '디테일'],
    sourceUrl: 'https://www.aik.or.kr',
  },
  {
    id: 'digital-twin-city',
    title: '디지털 트윈 도시 인프라 아이디어전',
    organizer: '한국건설기술연구원',
    category: 'BIM·디지털',
    status: 'open',
    deadline: '2026-06-05',
    announceDate: '2026-02-20',
    prize: '대상 500만 원',
    eligibility: '대학·대학원생',
    teamSize: '개인 또는 3인',
    summary:
      '시설물 유지관리·재난 대응을 위한 디지털 트윈 데이터 모델과 시각화 프로토타입을 제안합니다.',
    tags: ['디지털트윈', '유지관리', 'IoT'],
    sourceUrl: 'https://www.kict.re.kr',
  },
  {
    id: 'climate-shell',
    title: '기후적응형 외피·설비 통합 공모',
    organizer: '대한설비공학회',
    category: '친환경·에너지',
    status: 'open',
    deadline: '2026-04-18',
    announceDate: '2026-01-10',
    prize: '대상 450만 원',
    eligibility: '건축공학·건축설비·기계 전공',
    teamSize: '3~5인',
    summary:
      '외피·자연환기·열원 설비를 통합한 기후적응 전략. EnergyPlus 또는 동등 도구 시뮬레이션 필수.',
    tags: ['외피', '설비', '시뮬레이션'],
    sourceUrl: 'https://www.sarek.or.kr',
  },
]

export function daysUntil(deadline: string, today = new Date()): number {
  const end = new Date(`${deadline}T23:59:59`)
  const start = new Date(today)
  start.setHours(0, 0, 0, 0)
  return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
}

export function statusLabel(status: ContestStatus): string {
  switch (status) {
    case 'open':
      return '접수 중'
    case 'closing':
      return '마감 임박'
    case 'upcoming':
      return '예정'
    case 'closed':
      return '마감'
  }
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-')
  return `${y}.${m}.${d}`
}
