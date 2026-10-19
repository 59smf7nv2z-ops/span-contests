import './App.css'
import { ContestList } from './components/ContestList'
import { contests } from './data/contests'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=80'

function App() {
  const activeCount = contests.filter((c) => c.status !== 'closed').length

  return (
    <div className="site">
      <header className="hero">
        <div className="hero-media" aria-hidden>
          <img
            src={HERO_IMAGE}
            alt=""
            width={2400}
            height={1600}
            fetchPriority="high"
          />
        </div>
        <div className="hero-grid" aria-hidden />

        <nav className="nav" aria-label="주요">
          <a className="nav-brand" href="#top">
            스팬 <span>SPAN</span>
          </a>
          <div className="nav-links">
            <a href="#contests">공모전</a>
            <a href="#guide">이용 안내</a>
          </div>
        </nav>

        <div className="hero-inner" id="top">
          <p className="hero-brand">
            스팬 <em>SPAN</em>
          </p>
          <h1 className="hero-headline">건축공학도를 위한 공모전 허브</h1>
          <p className="hero-lead">
            구조·시공·BIM·에너지 대회를 한곳에서 훑고, 마감 전에 팀에 합류하세요.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contests">
              공모전 {activeCount}건 보기
            </a>
            <a className="btn btn-ghost" href="#guide">
              스팬 이용법
            </a>
          </div>
        </div>
      </header>

      <main>
        <ContestList />

        <section className="guide" id="guide" aria-labelledby="guide-title">
          <div className="section">
            <div className="section-head">
              <div>
                <p className="section-eyebrow">How it works</p>
                <h2 className="section-title" id="guide-title">
                  스팬에서 공모전을 고르는 법
                </h2>
              </div>
              <p className="section-desc">
                복잡한 일정표 대신, 지원 가능한 대회만 빠르게 걸러 보세요.
              </p>
            </div>

            <ol className="guide-steps">
              <li>
                <h3>분야로 좁히기</h3>
                <p>
                  구조설계, BIM, 친환경·에너지 등 전공 트랙에 맞는 태그를 골라 목록을 줄입니다.
                </p>
              </li>
              <li>
                <h3>마감과 팀 규모 확인</h3>
                <p>
                  D-day, 참가 자격, 팀 인원을 먼저 보고 이번 학기에 소화 가능한 대회만 남깁니다.
                </p>
              </li>
              <li>
                <h3>주최 공고로 이동</h3>
                <p>
                  상세는 주최 기관 페이지에서 최종 확인하세요. 스팬은 일정·요약을 모아 주는 허브입니다.
                </p>
              </li>
            </ol>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <p className="footer-brand">
              스팬 <span>SPAN</span>
            </p>
            <p>건축공학 학생을 위한 공모전 정보 서비스</p>
          </div>
          <p>
            일정·상금·자격은 주최 공고가 우선합니다.
            <br />
            일부 항목은 참고용 샘플 데이터입니다.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
