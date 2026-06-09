import { Link } from 'react-router-dom'
import './InquiriesPage.css'

export function InquiryWritePage() {
  return (
    <section
      className="inquiry-write-page"
      aria-labelledby="inquiry-write-title"
    >
      <header className="inquiry-subpage-header">
        <div>
          <h2 id="inquiry-write-title">문의 하기</h2>
        </div>
        <Link className="inquiry-secondary-link" to="/inquiries">
          목록
        </Link>
      </header>

      <form className="inquiry-form">
        <label className="inquiry-form-field">
          <span>제목</span>
          <input placeholder="문의 제목을 입력하세요" type="text" />
        </label>

        <label className="inquiry-form-field">
          <span>태그</span>
          <select defaultValue="배송">
            <option value="배송">배송</option>
            <option value="결제">결제</option>
            <option value="상품">상품</option>
            <option value="교환/환불">교환/환불</option>
            <option value="기타">기타</option>
          </select>
        </label>

        <label className="inquiry-form-field inquiry-form-body">
          <span>내용</span>
          <textarea placeholder="문의 내용을 자세히 작성하세요" rows={12} />
        </label>

        <div className="inquiry-form-actions">
          <Link className="inquiry-secondary-link" to="/inquiries">
            취소
          </Link>
          <button className="inquiries-primary-button" type="submit">
            등록
          </button>
        </div>
      </form>
    </section>
  )
}
