import { useMemo, useState, type FormEvent } from 'react'
import {
  categories,
  contests,
  daysUntil,
  formatDate,
  statusLabel,
  type Contest,
  type ContestCategory,
  type ContestStatus,
} from '../data/contests'

type SortKey = 'deadline' | 'newest' | 'title'

const statusFilters: { value: ContestStatus | 'all'; label: string }[] = [
  { value: 'all', label: '전체 상태' },
  { value: 'open', label: '접수 중' },
  { value: 'closing', label: '마감 임박' },
  { value: 'upcoming', label: '예정' },
  { value: 'closed', label: '마감' },
]

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg className="chevron" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 5.5L8 10.5L13 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function ContestList() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<ContestCategory | 'all'>('all')
  const [status, setStatus] = useState<ContestStatus | 'all'>('all')
  const [sort, setSort] = useState<SortKey>('deadline')
  const [openId, setOpenId] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = contests.filter((c) => {
      if (category !== 'all' && c.category !== category) return false
      if (status !== 'all' && c.status !== status) return false
      if (!q) return true
      const hay = [c.title, c.organizer, c.summary, ...c.tags].join(' ').toLowerCase()
      return hay.includes(q)
    })

    list = [...list].sort((a, b) => {
      if (sort === 'title') return a.title.localeCompare(b.title, 'ko')
      if (sort === 'newest') return b.announceDate.localeCompare(a.announceDate)
      const aClosed = a.status === 'closed' ? 1 : 0
      const bClosed = b.status === 'closed' ? 1 : 0
      if (aClosed !== bClosed) return aClosed - bClosed
      return a.deadline.localeCompare(b.deadline)
    })

    return list
  }, [query, category, status, sort])

  function onSearch(e: FormEvent) {
    e.preventDefault()
  }

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="section" id="contests" aria-labelledby="contests-title">
      <div className="section-head">
        <div>
          <p className="section-eyebrow">Browse</p>
          <h2 className="section-title" id="contests-title">
            지금 열린 공모전
          </h2>
        </div>
        <p className="section-desc">
          구조·BIM·에너지·도시까지, 건축공학도가 바로 지원할 수 있는 대회를 모아 둡니다.
        </p>
      </div>

      <div className="filters">
        <form className="search" onSubmit={onSearch} role="search">
          <SearchIcon />
          <label className="sr-only" htmlFor="contest-search">
            공모전 검색
          </label>
          <input
            id="contest-search"
            type="search"
            placeholder="제목, 주최, 태그로 검색"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </form>

        <div className="filter-row" role="group" aria-label="분야 필터">
          <button
            type="button"
            className="chip"
            aria-pressed={category === 'all'}
            onClick={() => setCategory('all')}
          >
            전체 분야
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className="chip"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="filter-row" role="group" aria-label="상태 필터">
          {statusFilters.map((s) => (
            <button
              key={s.value}
              type="button"
              className="chip"
              aria-pressed={status === s.value}
              onClick={() => setStatus(s.value)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="meta-bar">
        <p>
          <strong>{filtered.length}</strong>건 표시
        </p>
        <label className="sort">
          정렬
          <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
            <option value="deadline">마감 임박순</option>
            <option value="newest">최신 공고순</option>
            <option value="title">이름순</option>
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="empty">조건에 맞는 공모전이 없습니다. 필터를 바꿔 보세요.</p>
      ) : (
        <ul className="contest-list">
          {filtered.map((contest) => (
            <ContestRow
              key={contest.id}
              contest={contest}
              open={openId === contest.id}
              onToggle={() => toggle(contest.id)}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

function ContestRow({
  contest,
  open,
  onToggle,
}: {
  contest: Contest
  open: boolean
  onToggle: () => void
}) {
  const days = daysUntil(contest.deadline)
  const detailId = `detail-${contest.id}`

  let dayText: string
  let dayClass = 'deadline-days'
  if (contest.status === 'closed' || days < 0) {
    dayText = '접수 종료'
    dayClass += ' gone'
  } else if (days === 0) {
    dayText = '오늘 마감'
    dayClass += ' warn'
  } else if (days <= 14) {
    dayText = `D-${days}`
    dayClass += ' warn'
  } else {
    dayText = `D-${days}`
  }

  return (
    <li className="contest-item">
      <button
        type="button"
        className="contest-trigger"
        aria-expanded={open}
        aria-controls={detailId}
        onClick={onToggle}
      >
        <div>
          <div className="contest-top">
            <span className={`status status-${contest.status}`}>{statusLabel(contest.status)}</span>
            <span className="category-tag">{contest.category}</span>
          </div>
          <h3 className="contest-title">{contest.title}</h3>
          <p className="contest-org">{contest.organizer}</p>
        </div>
        <div className="contest-side">
          <span className="deadline">{formatDate(contest.deadline)}</span>
          <span className={dayClass}>{dayText}</span>
          <ChevronIcon />
        </div>
      </button>

      {open && (
        <div className="contest-detail" id={detailId}>
          <p>{contest.summary}</p>
          <dl className="detail-grid">
            <div>
              <dt>시상</dt>
              <dd>{contest.prize}</dd>
            </div>
            <div>
              <dt>참가 자격</dt>
              <dd>{contest.eligibility}</dd>
            </div>
            <div>
              <dt>팀 구성</dt>
              <dd>{contest.teamSize}</dd>
            </div>
            <div>
              <dt>공고일</dt>
              <dd>{formatDate(contest.announceDate)}</dd>
            </div>
          </dl>
          <div className="tag-row">
            {contest.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="detail-actions">
            <a
              className="btn btn-primary"
              href={contest.sourceUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              주최 페이지 열기
            </a>
            <button type="button" className="btn btn-ghost" onClick={onToggle}>
              접기
            </button>
          </div>
        </div>
      )}
    </li>
  )
}
