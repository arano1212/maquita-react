import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Prompt from '../components/promt';

const Home = ({ name, setName, resetName }) => {
  //const [name, setName] = useState('');
  const [showPrompt, setShowPrompt] = useState(!name);
  const navigate = useNavigate();

  // Información para las 15 cards
  const cardsData = [
    { title: "Adventure 1", img: "https://via.placeholder.com/400x200", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Adventure 2", img: "https://via.placeholder.com/400x200", description: "Pellentesque habitant morbi tristique senectus et netus." },
    { title: "Adventure 3", img: "https://via.placeholder.com/400x200", description: "Aenean commodo ligula eget dolor aenean massa." },
    { title: "Adventure 4", img: "https://via.placeholder.com/400x200", description: "Cum sociis natoque penatibus et magnis dis parturient." },
    { title: "Adventure 5", img: "https://via.placeholder.com/400x200", description: "Donec quam felis, ultricies nec, pellentesque eu, pretium." },
    { title: "Adventure 6", img: "https://via.placeholder.com/400x200", description: "Nulla consequat massa quis enim. Donec pede justo." },
    { title: "Adventure 7", img: "https://via.placeholder.com/400x200", description: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae." },
    { title: "Adventure 8", img: "https://via.placeholder.com/400x200", description: "Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies." },
    { title: "Adventure 9", img: "https://via.placeholder.com/400x200", description: "Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget." },
    { title: "Adventure 10", img: "https://via.placeholder.com/400x200", description: "Phasellus viverra nulla ut metus varius laoreet." },
    { title: "Adventure 11", img: "https://via.placeholder.com/400x200", description: "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel." },
    { title: "Adventure 12", img: "https://via.placeholder.com/400x200", description: "Aenean massa. Cum sociis natoque penatibus et magnis." },
    { title: "Adventure 13", img: "https://via.placeholder.com/400x200", description: "Etiam ultricies nisi vel augue. Curabitur ullamcorper." },
    { title: "Adventure 14", img: "https://via.placeholder.com/400x200", description: "Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus." },
    { title: "Adventure 15", img: "https://via.placeholder.com/400x200", description: "Phasellus viverra nulla ut metus varius laoreet." }
  ];

  const handleCardClick = (title) => {
    navigate(`/adventure/${title}`, { state: { cardsData } });
  };

  const handleNameChange = (newName) => {
    setName(newName);
    setShowPrompt(false); // Oculta el Prompt cuando se establece el nombre
  };

  const handleResetName = () => {
    resetName(); // Llama a la función para resetear el nombre
    setShowPrompt(true); // Muestra el Prompt nuevamente
  };


  useEffect(() => {
    if (name) {
      setShowPrompt(false);
    }
  }, [name]);
  

  return (
    <div className="container is-fluid" style={{ height: '100vh', padding: '20px' }}>
      {showPrompt && <Prompt setName={handleNameChange} />}
   

      {/* Carrusel de imágenes */}
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={1000} showThumbs={false}>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Adventure+1" alt="Adventure 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Adventure+2" alt="Adventure 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Adventure+3" alt="Adventure 3" />
        </div>
      </Carousel>

      {/* Mensaje de bienvenida */}
      <h1 className="title" style={{ marginTop: '20px', textAlign: 'center' }}>
        {name ? `Welcome ${name} to Adventures!` : 'Welcome to Adventures!'}
      </h1>
      <div className="has-text-centered" style={{ margin: '10px 0' }}>
    <button 
      className="button is-light" 
      style={{ 
        borderRadius: '5px', 
        padding: '10px 20px', 
        backgroundColor: '#f5f5f5', 
        color: '#333', 
        border: '1px solid #ddd' 
      }} 
      onClick={handleResetName}
    >
      Reset Name
    </button>
  </div>


      {/* Descripción debajo del mensaje de bienvenida */}
      <div className="content" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel purus magna.</p>
      </div>

      {/* Grilla de cards */}
      <div className="columns is-multiline">
        {cardsData.map((card, index) => (
          <div key={index} className="column is-one-third">
            <div className="card" onClick={() => handleCardClick(card.title)}>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={card.img} alt={card.title} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{card.title}</p>
                  </div>
                </div>
                <div className="content">
                  {card.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
