import React from "react";

export const Presentation = () => {
  return (
    <>
      <section className="presentation">
        <p className="presentation__heading">Nuestro trabajo</p>
        <p className="presentation__text">
          En Patagonia Infinity «entendemos que las maravillas del mundo están
          hecha a mano» y esa es la razón por la que nuestros productos
          requieren necesariamente del amor con que lo hacemos. Creamos
          productos exclusivos y originales para darte algo diferente. Los
          insumos utilizados son  de la mejor calidad,  suaves lanas y finos
          algodones. Este proyecto tiene como objetivo posicionar las fibras
          autóctonas de Latinoamérica, no sólo en el mundo artesanal sino en la
          moda urbana. Trabajamos constantemente en nuestra innovación para
          lograr mejoras en la calidad de las fibras e incorporar diseños que
          acompañen las tendencias en la moda urbana contemporánea.
        </p>
      </section>

      <section>
        <img className="img" src="./public/patagonia fondo.jpg" alt="" />
      </section>

      <div className="thread"></div>

      <section className="sobreNosotros">
        <div className="sobreNosotros__container">
          <h3 className="sobreNosotros__heading">Nuestra mision</h3>
          <p className="sobreNosotros__paragraph">
            Busco incidir en el rescate y la revalorización de la artesanía como
            forma de expresión y transmisión cultural de nuestros pueblos más
            antiguos. dejo en las manos de consumidores conscientes que desean y
            valoran al objeto artesanal como un articulador de universos.
          </p>
        </div>

        <div className="sobreNosotros__container">
          <h3 className="sobreNosotros__heading">Nuestra vision</h3>
          <p className="sobreNosotros__paragraph">
            La fascinación por la riqueza cultural de la Argentina profunda nos
            guía en la búsqueda de prendas artesanales producida para que se
            aprecie el árte en un tejido. La lana se cura, se lava  para ofrecer
            piezas que son el patrimonio de nuestras culturas originarias.
          </p>
        </div>

        <div className="sobreNosotros__container">
          <h3 className="sobreNosotros__heading">Nuestros valores</h3>
          <p className="sobreNosotros__paragraph">
            Compromiso con nuestros clientes al ofrecer productos hechos con
            materia prima de calidad y amigable con el medio ambiente
          </p>
        </div>

        <div className="sobreNosotros__container">
          <h3 className="sobreNosotros__heading">Nuestros objetivos</h3>
          <p className="sobreNosotros__paragraph">
            Difundir la cultura y nuestras raíces ancestrales a través de
            creaciones que acaricien el alma de nuestros clientes
          </p>
        </div>
      </section>
    </>
  );
};
