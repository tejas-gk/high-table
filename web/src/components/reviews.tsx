import React, { useState } from 'react'
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export default function Reviews({
    productId,
    userId
}) {
    const [reviewText, setReviewText] = useState('');
    const [reviewBody, setReviewBody] = useState('');
    const [stars, setStars] = useState(0);
    const [hoveredStars, setHoveredStars] = useState(0);

    const handleStarClick = (star: String) => {
        // @ts-ignore
        setStars(star);
    };
    const handleStarHover = (star: String) => {
        // @ts-ignore
        setHoveredStars(star);
    };

    const handleReviewSubmit = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/review`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId,
                    rating: stars,
                    comment: reviewBody,
                    title: 'John Doe',
                    userId,
                }),
            });


            if (response.ok) {
                console.log('Review created successfully');
                const review = await response.json();
                
                setReviewText('');
                setReviewBody('');
                setStars(0);
            } else {
                console.error('Error creating review:', response.statusText);
                
            }
        } catch (error) {
            console.error('Error creating review:', error);
        }
    }
  return (
    <>
          {
              true && (
                  <>
                      <div className='
                col-span-12 flex flex-col gap-4
                            '>
                          <div className='flex gap-2'>
                              {[1, 2, 3, 4, 5].map((star) => (
                                  <button
                                      key={star}
                                      onMouseEnter={() => handleStarHover(star)}
                                      onMouseLeave={() => handleStarHover(0)}
                                      onClick={() => handleStarClick(star)}
                                      className={`text-2xl ${(hoveredStars >= star || stars >= star) ? 'text-yellow-400' : 'text-gray-300'
                                          } cursor-pointer`}
                                  >
                                      &#9733;
                                  </button>
                              ))}
                          </div>
                          <Input placeholder='Enter your review'
                              value={reviewText}
                              onChange={(e) => setReviewText(e.target.value)}
                          />
                          <Textarea placeholder='Enter your review'
                              value={reviewBody}
                              onChange={(e) => setReviewBody(e.target.value)}
                          />
                          <Button
                              onClick={handleReviewSubmit}
                          >
                              Submit Review
                          </Button>
                      </div>
                  </>
              )}
    </>
  )
}
