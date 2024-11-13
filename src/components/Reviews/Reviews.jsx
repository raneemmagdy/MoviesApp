import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import img from '../../assets/images/images.png'
export default function Reviews() {
    let { id } = useParams();
    let [reviews, setReviews] = useState(null);

    async function getReviewsForMovies() {
        try {
            let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=3e900c7706fc519f0627de6b8ef6e26f`);
            setReviews(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getReviewsForMovies();
    }, []);

    if (!reviews) return <Loading />;

    return (
        <div className="reviews-container">
            <h1 className='text-white'>Reviews</h1>
            {reviews.length > 0 ? (
                reviews.map((review) => (
                    <div key={review.id} className="review-card">
                        <div className="author-info">
                            {review.author_details.avatar_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`}
                                    alt={`${review.author} profile`}
                                    className="profile-image"
                                />
                            ) : (
                                <img
                                    src={img}
                                    alt={`${review.author} profile`}
                                    className="profile-image"
                                />
                            )}
                            <div>
                                <h3>{review.author_details.username || "Anonymous"}</h3>
                                {review.author_details.rating && (
                                    <strong className="text-warning">Rating: {review.author_details.rating}/10</strong>
                                )}
                            </div>
                        </div>
                        <p className="review-content">{review.content}</p>
                        <strong>Posted on: {new Date(review.created_at).toLocaleDateString()}</strong>
                        <a href={review.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </div>
                ))
            ) : (
                <strong className='logo-color'>No reviews available for this movie.</strong>
            )}
        </div>
    );
}
