import { Link } from 'react-router-dom'
import './InquiriesPage.css'

const boardTabs = ['전체', '문의', '답변완료', '공지']

const tagFilters = ['배송', '결제', '상품', '교환/환불', '기타']

const inquiries = [
  {
    id: 18,
    title: '나무 키트 배송 일정 문의드립니다.',
    author: '김민준',
    createdAt: '2026-06-10',
    status: '답변대기',
    tag: '배송',
    comments: 0,
    isPinned: true,
  },
  {
    id: 17,
    title: '결제 후 주문 내역이 보이지 않습니다.',
    author: '이서연',
    createdAt: '2026-06-09',
    status: '답변완료',
    tag: '결제',
    comments: 3,
    isPinned: false,
  },
  {
    id: 16,
    title: '상품 옵션을 변경하고 싶어요.',
    author: '박지훈',
    createdAt: '2026-06-08',
    status: '답변완료',
    tag: '상품',
    comments: 1,
    isPinned: false,
  },
  {
    id: 15,
    title: '반품 접수는 어디서 진행하나요?',
    author: '정하은',
    createdAt: '2026-06-07',
    status: '답변대기',
    tag: '교환/환불',
    comments: 2,
    isPinned: false,
  },
]

export function InquiriesPage() {
  return (
    <section className="inquiries-page" aria-labelledby="inquiries-title">
      <header className="inquiries-header">
        <div>
          <h2 id="inquiries-title">문의 게시판</h2>
        </div>
        <Link className="inquiries-primary-button" to="/inquiries/new">
          글쓰기
        </Link>
      </header>

      <nav className="inquiries-tabs" aria-label="문의 글 분류">
        {boardTabs.map((tab) => (
          <button
            className={
              tab === '전체' ? 'inquiries-tab active' : 'inquiries-tab'
            }
            key={tab}
            type="button"
          >
            {tab}
          </button>
        ))}
      </nav>

      <section className="inquiries-toolbar" aria-label="문의 글 검색 및 태그">
        <div className="inquiries-tags" aria-label="태그 필터">
          {tagFilters.map((tag) => (
            <button className="inquiries-tag" key={tag} type="button">
              #{tag}
            </button>
          ))}
        </div>

        <form className="inquiries-search">
          <label className="sr-only" htmlFor="inquiries-search">
            문의 글 검색
          </label>
          <select aria-label="검색 조건" defaultValue="title">
            <option value="title">제목</option>
            <option value="author">작성자</option>
            <option value="tag">태그</option>
          </select>
          <input
            id="inquiries-search"
            placeholder="검색어를 입력하세요"
            type="search"
          />
          <button type="submit">검색</button>
        </form>
      </section>

      <div className="inquiries-board">
        <div className="inquiries-row inquiries-head" aria-hidden="true">
          <span>No</span>
          <span>제목</span>
          <span>태그</span>
          <span>댓글</span>
          <span>상태</span>
          <span>글쓴이</span>
          <span>작성시간</span>
          <span>관리</span>
        </div>

        {inquiries.map((inquiry) => (
          <article className="inquiries-row inquiry-item" key={inquiry.id}>
            <span className="inquiry-number">
              {inquiry.isPinned ? '고정' : inquiry.id}
            </span>
            <div className="inquiry-title-cell">
              <div className="inquiry-title-line">
                <Link className="inquiry-title" to={`/inquiries/${inquiry.id}`}>
                  {inquiry.title}
                </Link>
                <span
                  className={
                    inquiry.status === '답변완료'
                      ? 'inquiry-status inquiry-status-mobile done'
                      : 'inquiry-status inquiry-status-mobile'
                  }
                >
                  {inquiry.status}
                </span>
              </div>
              <span className="inquiry-mobile-meta">
                {inquiry.author} · {inquiry.createdAt}
              </span>
            </div>
            <span className="inquiry-tag">#{inquiry.tag}</span>
            <span className="inquiry-comments">댓글 {inquiry.comments}</span>
            <span
              className={
                inquiry.status === '답변완료'
                  ? 'inquiry-status done'
                  : 'inquiry-status'
              }
            >
              {inquiry.status}
            </span>
            <span className="inquiry-author">{inquiry.author}</span>
            <time className="inquiry-date" dateTime={inquiry.createdAt}>
              {inquiry.createdAt}
            </time>
            <div className="inquiry-actions">
              <button type="button">수정</button>
              <button type="button">삭제</button>
            </div>
          </article>
        ))}
      </div>

      <footer className="inquiries-footer">
        <nav className="inquiries-pagination" aria-label="페이지 이동">
          <button type="button" aria-label="이전 페이지">
            이전
          </button>
          <button className="active" type="button">
            1
          </button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" aria-label="다음 페이지">
            다음
          </button>
        </nav>
      </footer>
    </section>
  )
}
