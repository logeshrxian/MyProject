import { Link } from 'react-router-dom';
import './FirstSlide.css';

function FirstSlide() {
  return (
    <div className="App">
      <div className="container">
        <div className="left-container">
          <div className="essentials-item">
            <img src="https://www.marthajackson.co.uk/content/uploads/2024/06/for-front-page.jpg" alt="Essentials" />
            <div className="text">
              {/* <p>E s s e n t i l a s</p> */}
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="new-in-item">
            <Link to="/productpage">
              <img src="https://www.marthajackson.co.uk/content/uploads/2024/06/ML998_Sterling-Silver-Sea-Shell-Dangly-Earrings_2.jpg" alt="Img-in" />
            </Link>
            <div className="text">
              {/* <p>New In</p> */}
            </div>
          </div>
          <div className="boho-pearls-container">
            <div className="boho-item">
              <a href="https://www.example.com/boho-products" target="_blank" rel="noopener noreferrer">
                <img src="https://www.marthajackson.co.uk/content/uploads/2024/07/gemstone-beaded-necklace-group_6-copy.jpg" alt="Boho" />
              </a>
              <div className="text">
                {/* <p>B o h o S h o p</p> */}
              </div>
            </div>
            <div className="pearls-item">
              <a href="https://www.example.com/pearls-products" target="_blank" rel="noopener noreferrer">
                <img src="https://www.marthajackson.co.uk/content/uploads/2024/04/MK818B_Sterling-Silver-String-of-Pearls-Bracelet._3.jpg" alt="Pearls" />
              </a>
              <div className="text">
                {/* <p>P e a r l s  S h o p</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSlide;