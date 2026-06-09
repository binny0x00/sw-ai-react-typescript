import { Link, useParams } from 'react-router-dom'
import './InquiriesPage.css'

const comments = [
  {
    id: 1,
    author: '고객센터',
    createdAt: '2026-06-10 14:20',
    isAnswer: true,
    content:
      '현재 출고 준비 중입니다. 영업일 기준 1~2일 내 발송 예정이며, 송장 등록 후 알림을 보내드리겠습니다.',
  },
  {
    id: 2,
    author: '김민준',
    createdAt: '2026-06-10 15:04',
    isAnswer: false,
    content: '확인 감사합니다. 이번 주 안으로 받을 수 있으면 좋겠습니다.',
  },
]

export function InquiryDetailPage() {
  const { inquiryId } = useParams()

  return (
    <article
      className="inquiry-detail-page"
      aria-labelledby="inquiry-detail-title"
    >
      <header className="inquiry-subpage-header">
        <div>
          <p>문의 상세</p>
          <h2 id="inquiry-detail-title">나무 키트 배송 일정 문의드립니다.</h2>
        </div>
        <Link className="inquiry-secondary-link" to="/inquiries">
          목록
        </Link>
      </header>

      <section className="inquiry-post-card">
        <div className="inquiry-detail-meta-line">
          <span className="inquiry-community">답변 완료</span>
          <span>김민준</span>
          <time dateTime="2026-06-10T14:50">2026-06-10 14:50</time>
          <span>조회수 1</span>
          <span>#{inquiryId}</span>
        </div>

        <div className="inquiry-form inquiry-detail-form">
          <label className="inquiry-form-field">
            <span>제목</span>
            <input readOnly value="나무 키트 배송 일정 문의드립니다." />
          </label>

          <label className="inquiry-form-field">
            <span>태그</span>
            <select disabled value="배송">
              <option value="배송">배송</option>
            </select>
          </label>

          <label className="inquiry-form-field inquiry-form-body">
            <span>문의 내용</span>
            <textarea
              readOnly
              rows={8}
              value={`주문한 나무 키트의 배송 일정이 궁금합니다. 결제는 완료되었고 주문 내역에도 정상적으로 표시됩니다.`}
            />
          </label>

          <div className="inquiry-form-actions inquiry-icon-actions">
            <button aria-label="문의 수정" type="button">
              ✎
            </button>
            <button aria-label="문의 삭제" type="button">
              ×
            </button>
          </div>
        </div>
      </section>

      <section
        className="inquiry-comments-card"
        aria-labelledby="inquiry-comments-title"
      >
        <header className="inquiry-comments-header">
          <h3 id="inquiry-comments-title">댓글 2개</h3>
          <label>
            정렬:
            <select defaultValue="newest">
              <option value="newest">최신순</option>
              <option value="oldest">오래된순</option>
            </select>
          </label>
        </header>

        <form className="inquiry-comment-form">
          <label className="sr-only" htmlFor="inquiry-comment">
            댓글 작성
          </label>
          <textarea
            id="inquiry-comment"
            placeholder="댓글을 입력해 주세요."
            rows={4}
          />
          <div className="inquiry-comment-form-actions">
            <button className="inquiry-text-button" type="button">
              취소
            </button>
            <button className="inquiries-primary-button" type="submit">
              등록
            </button>
          </div>
        </form>

        <div className="inquiry-comments-list">
          {comments.map((comment, index) => {
            const commentClassName = [
              'inquiry-comment',
              comment.isAnswer ? 'inquiry-comment-answer' : '',
              !comment.isAnswer && index === 1 ? 'inquiry-comment-reply' : '',
            ]
              .filter(Boolean)
              .join(' ')

            return (
              <div className={commentClassName} key={comment.id}>
                <div className="inquiry-comment-avatar" aria-hidden="true">
                  {comment.author.slice(0, 1)}
                </div>
                <div className="inquiry-comment-body">
                  <div className="inquiry-comment-meta">
                    <strong>{comment.author}</strong>
                    {comment.isAnswer ? (
                      <span className="inquiry-answer-badge">답변</span>
                    ) : null}
                    <time dateTime={comment.createdAt}>
                      {comment.createdAt}
                    </time>
                  </div>
                  {!comment.isAnswer && index === 1 ? (
                    <span className="inquiry-comment-replying">
                      고객센터 답변에 대한 댓글
                    </span>
                  ) : null}
                  <p>{comment.content}</p>
                  <div className="inquiry-comment-actions">
                    <button type="button">좋아요</button>
                    <button type="button">답글</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </article>
  )
}
