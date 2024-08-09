/* eslint-disable react/no-unknown-property */
import { useLocation, useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CardDetail = () => {
  const { title } = useParams();
  const location = useLocation();
  const { cardsData } = location.state || {};

  const card = cardsData ? cardsData.find(card => card.title === title) : null;

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="container" style={{ padding: '20px' }}>
      {/* Pequeño carrusel de imágenes adicionales */}
      <div style={{ marginBottom: '20px' }}>
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false}>
          <div>
            <img src="https://via.placeholder.com/400x200" alt="Additional Image 1" />
          </div>
          <div>
            <img src="https://via.placeholder.com/400x200" alt="Additional Image 2" />
          </div>
          <div>
            <img src="https://via.placeholder.com/400x200" alt="Additional Image 3" />
          </div>
        </Carousel>
      </div>

      <h1 className="title" style={{ textAlign: 'center' }}>{card.title}</h1>
      <div className="columns" style={{ marginTop: '20px' }}>
        <div className="column is-half">
          <figure className="image is-4by3">
            <img src={card.img} alt={card.title} />
          </figure>
        </div>
        <div className="column is-half">
          <figure className="image is-4by3">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </figure>
        </div>
      </div>
      
      <div className="columns">
        <div className="column">
          <div className="content">
            <p>{card.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lorem ut nulla fringilla, vel maximus erat viverra. Nullam dignissim leo a orci malesuada ullamcorper.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
