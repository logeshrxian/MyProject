import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <div className="App">
      <div className="blog-container">
        <p className='blog'>B l o g</p>
        <div className="image-container">
          <div className="image-item">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://www.marthajackson.co.uk/content/uploads/2023/09/For-web-front-page-2-1-1536x1536.jpg" alt="Image 1" />
              <div className="image-text">
                <h2>Téja Renée x Martha Jackson</h2>
                <p>Winter 23 Trend Forecast</p>
                <button>READ MORE</button>
              </div>
            </a>
          </div>
          <div className="image-item">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://www.marthajackson.co.uk/content/uploads/2021/05/layers-chains-1110x1110-1.jpg" alt="Image 2" />
              <div className="image-text">
                <h2>How to layer necklaces</h2>
                <p>3 ways to stack necklaces like a pro.</p>
                <button>READ MORE</button>
              </div>
            </a>
          </div>
          <div className="image-item">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://www.marthajackson.co.uk/content/uploads/2023/09/IMG_2303-copy.jpg" alt="Image 3" />
              <div className="image-text">
                <h2>Influencer Approved</h2>
                <p>925 Sterling Silver Jewellery with a seal of approval</p>
                <button>READ MORE</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
