import "./ProductReview.css";

export default function ProductReview({review}) {
    return (
        <div className="reviews_container">
            <div className="card">
                <div className="card-content">
                    <strong>{review.review_title}</strong><br/>
                    {review.name}<br/><br/>
                    <div className="content">
                        {review.reviews[review.reviews.length-1][0].split('\n').map((r,idx)=> <p>{r}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}