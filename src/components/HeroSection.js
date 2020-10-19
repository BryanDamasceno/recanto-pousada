import React from "react";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Carrossel } from "react-responsive-carousel";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Um lugar onde seu conforto é prioridade</h1>
      <div className="fundo">
        <div className="Imagens">
          <Carrossel showArrows={true} autoPlay={true} infiniteLoop={true}>
            <div>
              <img
                src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?cs=srgb&dl=pexels-pixabay-262048.jpg&fm=jpg"
                alt="Aqui tem um quarto"
              />
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/2662183/pexels-photo-2662183.jpeg?cs=srgb&dl=pexels-josh-hild-2662183.jpg&fm=jpg"
                alt="Aqui tem um quarto"
              />
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2280844/pexels-photo-2280844.jpeg?cs=srgb&dl=pexels-lucas-pezeta-2280844.jpg&fm=jpg"
                alt="Aqui tem um quarto"
              />
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/2662875/pexels-photo-2662875.jpeg?cs=srgb&dl=pexels-emrah-tolu-2662875.jpg&fm=jpg"
                alt="Aqui tem um quarto"
              />
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/2929191/pexels-photo-2929191.jpeg?cs=srgb&dl=pexels-jack-redgate-2929191.jpg&fm=jpg"
                alt="Aqui tem um quarto"
              />
            </div>
          </Carrossel>
        </div>
      </div>

      <div className="descricao">
        <h2>Venha conhecer nossa pousada</h2>
      </div>
      <p>
        <br />A pousada Recanto de Minas traz para você o melhor serviço de
        hospedagem e ao mesmo tempo possibilita um contato intenso com a
        natureza. Possuímos os melhores quartos da região e lindas trilhas com
        cachoeiras que só Minas Gerais pode oferecer. Não perca essa
        oportunidade!
      </p>
      <p>&copy;Equipe6 </p>
    </div>
  );
}

export default HeroSection;