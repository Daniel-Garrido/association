<script setup>
import navHeader from "../components/nav-header/nav-container.vue";
import card1 from "../components/card1.vue"
import cardEvent from "../components/card-events.vue"
import sliderConferences from '../components/slider-conferences.vue'
import sliderProjects from "../components/slider-projects.vue";
import formContact from "../components/form-contact.vue";
import cardLogo from '../components/card-logo.vue'
import {listCard1, listEvents, listConferences, listProjects, listLogosCommunity } from "../js/datos-home-page.js";
</script>

<template>
  <navHeader />

  <!-- Section Presentacion -->
  <section class="section__presentacion " id="home">
    <div class="presentacion__filter"></div>

    <div class="presentacion__content " data-aos="fade-up" data-aos-duration="1000">
      <p class="presentacion__intro">association for computing machinery</p>
      
      <h1 class="presentacion__title">
        Advancing Computing as a Science & Profession
      </h1>
      <p class="presentacion__description">
        We see a world where computing helps solve tomorrow’s problems – where
        we use our knowledge and skills to advance the profession and make a
        positive impact.
      </p>
    </div>
  </section>

  <!-- section journal -->
  <!-- Section cards1 -->
  <section class="section__card1" id="jounal">
    <div class="card1__content container" data-aos="fade-up" data-aos-duration="1000">
      <h2 class="card1__title section__title">
        Expand Your Peer Network, Enhance Your Professional
        <br>
        <span>Stature & Achieve Your Personal Career Goals </span>
      </h2>
      <p class="card1__description section__description">
        Your local chapter and ISSA International will provide you with a wealth of resources to keep you current with
        industry trends and developments in our ever-evolving field. What can we do for you today?
      </p>
      <ul class="card1__card--list">
        <li class="card1__card--item" v-for="item in listCard1">
          <card1 :src="item.src" :title="item.title" :description="item.description" />
        </li>
      </ul>
    </div>
  </section>

  <!-- Section Events -->
  <section class="" id="events">
    
    <div class="events__content " data-aos="fade-up" data-aos-duration="1000">
     
      
      <h2 class="section__title events__title">
        eventos
      </h2>
     
      <p class="events__description section__description">
       Algunos eventos que se han realizado por parte de la institución
      </p>

      <!-- lista de eventos -->
      <ul class="events__cards--list2">
        <li class="" v-for="event in listEvents">
          <cardEvent :src="event.src" :title="event.title" :date="event.date" />
        </li>
      </ul>

    </div>

  </section>

  <!-- Section Conferences -->
  <!-- <section class="section__conferences" id="conferences">
    <div
      class="conferences__content container"
      data-aos="fade-right"
      data-aos-duration="950">
      <h2 class="conferences__title section__title">
        Conferences
      </h2>
      <p class="conferences__description section__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna augue, condimentum id elit nec, facilisis lobortis magna.
      </p>
      <RouterLink to="/" class="conferences__link">
        See all conferences
      </RouterLink >
    </div>
    <sliderConferences
      data-aos="fade-right"
      data-aos-duration="950"
      :listConferences="listConferences" />
  </section> -->

  <!-- Section Projects -->
  <section class="section__projects" id="projects">

    <div class="projects__content container" data-aos="fade-right" data-aos-duration="950">

      <h2 class="projects__title section__title">
        Proyectos

      </h2>
      <p class="projects__description section__description">
        Se muestra a continuación algunos proyectos que se han realizado en la insitución
      </p>
    </div>
    <sliderProjects data-aos="fade-right" data-aos-duration="950" :list-proyects="listProjects" />

  </section>


  <!-- Section About -->
  <section class="section__about" id="about">

    <div class="about__content container" data-aos="fade-up" data-aos-duration="1000">

      <h2 class="about__title section__title">
        About
      </h2>

      <div class="about__content_seccion">
        <h1 class="about__title_Text"> Historia</h1>
        <p class="about_Text">
          En el contexto de México, como en muchas otras partes del mundo, la inteligencia artificial (IA) a menudo ha
          sido envuelta en un velo de misterio y especulación. Desde los relatos de ciencia ficción hasta los debates
          sobre el futuro del trabajo, la IA ha sido tema de fascinación y preocupación en igual medida. Sin embargo, en
          medio de estos mitos y percepciones distorsionadas, México se encuentra en una encrucijada única: tiene el
          potencial de aprovechar los beneficios de la IA para impulsar el progreso económico y social, al tiempo que
          enfrenta desafíos particulares en términos de acceso, capacitación y regulación.
          Es de esta forma que, en un mundo donde los avances tecnológicos y la inteligencia artificial a menudo son
          vistos con escepticismo y temor, nace la Asociación MAIKRON, fundada por un grupo de visionarios y entusiastas
          de la tecnología y la ciencia. La razón del nacimiento de dicha asociación radica en demostrar que la IA y la
          tecnología pueden ser fuerzas positivas que contribuyen al bienestar de la sociedad.
        </p>
      </div>


      <div class="about__content_seccion">
        <h1 class="about__title_Text"> Misión</h1>
        <p class="about_Text">
          Impulsar el uso responsable y ético de la tecnología y la inteligencia artificial para mejorar la calidad de
          vida de las personas y contribuir al desarrollo sostenible de México y del bienestar de su sociedad.
        </p>
      </div>


      <div class="about__content_seccion">
        <h1 class="about__title_Text"> Visión</h1>
        <p class="about_Text">
          Ser líder en el uso responsable y ético de la tecnología y la inteligencia artificial en México, siendo
          reconocida por su aporte al bienestar de las personas y al desarrollo sostenible del país.
        </p>
      </div>


    </div>

  </section>

<!-- Section Contact -->
<section class="section__contact" id="contact">
  <div class="contact__content container" data-aos="fade-up" data-aos-duration="1000">
    <h2 class="contact__title section__title">Contact</h2>
    <div class="contact__info">
      <div class="contact__social">
        <a href="mailto:g.goldcastle@maikron.org" class="contact__social--link">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="42" height="42" fill="currentColor">
    <path d="M22 3.9H2a2 2 0 0 0-2 2v12.2a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V5.9a2 2 0 0 0-2-2zm-1.5 1.1L12 12.3 3.5 5H20.5zM2 19.1V8.9l9 6.5 9-6.5v10.2H2z"/>
  </svg>
</a>
        <a href="https://www.facebook.com/profile.php?id=61553712248073" target="_blank" class="contact__social--link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="contact__icon">
            <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.118v-3.622h3.118v-2.671c0-3.097 1.894-4.788 4.66-4.788 1.325 0 2.465.099 2.794.143v3.24h-1.916c-1.502 0-1.794.714-1.794 1.762v2.314h3.588l-.467 3.622h-3.121v9.294h6.116c.733 0 1.324-.592 1.324-1.325v-21.351c0-.733-.591-1.325-1.324-1.325z"/>
          </svg>
        </a>
        <a href="https://x.com/Maikron_JAICA" target="_blank" class="contact__social--link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="contact__icon">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.718 0-4.918 2.201-4.918 4.917 0 .385.044.761.128 1.124-4.083-.205-7.702-2.16-10.126-5.134-.423.725-.666 1.571-.666 2.475 0 1.708.87 3.214 2.188 4.099-.808-.026-1.567-.248-2.229-.617-.001.021-.001.042-.001.063 0 2.386 1.697 4.374 3.951 4.829-.414.113-.851.173-1.3.173-.318 0-.626-.031-.928-.088.627 1.957 2.445 3.379 4.604 3.419-1.683 1.319-3.808 2.106-6.115 2.106-.397 0-.79-.023-1.175-.068 2.179 1.396 4.768 2.21 7.548 2.21 9.054 0 14.002-7.498 14.002-13.999 0-.213-.004-.426-.014-.637.962-.695 1.798-1.562 2.457-2.548z"/>
          </svg>
        </a>
        <a href="https://github.com/Maikron-JAICA" target="_blank" class="contact__social--link">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="42" height="42" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.262.793-.586 0-.288-.012-1.05-.017-2.06-3.293.715-4-1.598-4-1.598-.54-1.37-1.317-1.737-1.317-1.737-1.077-.737.082-.722.082-.722 1.19.084 1.82 1.223 1.82 1.223 1.06 1.815 2.786 1.293 3.464.99.107-.766.415-1.293.755-1.593-2.648-.3-5.44-1.324-5.44-5.896 0-1.302.465-2.368 1.22-3.202-.122-.303-.53-1.518.116-3.16 0 0 1.005-.32 3.3 1.227.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.292-1.547 3.297-1.227 3.297-1.227.648 1.642.24 2.857.118 3.16.755.834 1.218 1.9 1.218 3.202 0 4.586-2.795 5.59-5.454 5.883.427.369.81 1.095.81 2.213 0 1.598-.014 2.882-.014 3.275 0 .327.19.705.8.585C20.565 21.797 24 17.3 24 12c0-6.63-5.373-12-12-12z"/>
  </svg>
</a>

      </div>
    </div>
  </div>

</section>

  <!-- Footer Section -->
   <section>  <div class="footer__bottom-body">
  <p class="footer__bottom-text">Copyright © 2024 Maikron. All rights reserved.</p>
  <div class="footer__terms">&nbsp;</div>
</div></section>


  <!--<section class="section__contact" id="contact">
    <div class="contact__content container" data-aos="fade-up" data-aos-duration="1000">
      <h2 class="contact__title section__title">
        contact
      </h2>
      <formContact />

    </div>
  </section>-->


</template>

<style scoped>

/**estilos de listas generales */
ul{
  list-style: none;
}

/********  General  ********/
.section__title{
  text-align: center;
  font-family: var(--ff-source-serif-4);
  font-size: 2rem;
  font-weight: 800;
  line-height: 2.3rem;
  margin-bottom: 2rem;
  text-transform: capitalize;
  padding-top: 6rem;
}

.section__description{
 
  text-align: center;
  font-family: var(--ff-montserrat);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  width: 756px;
  margin: 0 auto;
  margin-bottom: 5rem;
}


/********  Clases Section Presentacion  ********/
.section__presentacion {
 
   height: 565px; 
   background: url("src\\assets\\imagenes\\home\\img1.png"),center/ cover no-repeat; 
   position: relative;

  
}

.presentacion__filter {
 
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  backdrop-filter: blur(11.5px);
  filter: brightness(35%);
  z-index: 1;

  
}

.presentacion__content {
  z-index: 2;
  left: 120px;
  right: 120px;
  position: absolute;
  color: white;
  padding: 150px 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
 
  gap: 1rem;
}

.presentacion__intro {
  color: #fff;
  font-family: var(--ff-montserrat);
  font-size: 1.2rem;
  font-weight: 400;
  font-variant: small-caps;
  letter-spacing: 0.18rem;
}

.presentacion__title {
  color: #fff;
  font-family: var(--ff-montserrat);
  font-size: 3rem;
  font-weight: 700;
  width: 724px;
  margin-bottom: 1rem;
}

.presentacion__description {
  color: #fff;
  font-family: var(--ff-montserrat);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  width: 692px;
}


/********  Clases Section Card1  ********/
.card1__title{
  color: #2E3339;
}

.card1__title span{
  color: var(--c-yellow-primary);
}

.card1__description{
  color: var(--c-grey-primary);

  max-width: 100%;
  word-wrap: break-word;

}

.card1__card--list{
 
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

.events__title{
  color: var(--c-yellow-primary);
}

.events__description{
  color: var(--c-grey-primary);

  max-width: 100%;
  word-wrap: break-word;

}

.events__cards--list{
 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.events__cards--list2{
  width: 100%;

 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
}


/********  Clases Section Conferences  ********/
.section__conferences{
  padding-bottom: 5rem;
  /* border: 1px solid red; */
}

.conferences__content{
  text-align: right;
}

.conferences__title{
  color: var(--c-yellow-primary);
}

.conferences__description{
  color: var(--c-grey-primary);
}

.conferences__link{
  color: black;
  font-family: var(--ff-montserrat);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6rem;
  text-decoration: none;
  padding: 0.5rem;
  transition: color 0.2s ease-in-out;
}

.conferences__link:hover{
  color: var(--c-yellow-primary)
}

/**clases seccion eventos */
.section__events{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 
}
/********  Clases Section Projects  ********/
/**contenedor de la sección proyectos */

.section__projects {
  background-color: #242526; /* Color de fondo original */
  color: #D2D2D2; /* Color de texto original */
  padding: 2rem 1rem;
  text-align: center;
}

.projects__title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--c-yellow-secondary);
}

.projects__description {
  font-size: 1rem; /* Font size for smaller screens */
  font-family: var(--ff-montserrat);
  font-weight: 400;
  line-height: 1.5;
  padding: 0 1.2rem;
  color: #D2D2D2;
  max-width: 100%;
  word-wrap: break-word;
}

.projects__content {
  margin-bottom: 2rem;
}

/* Responsividad para todos los párrafos */
@media (min-width: 640px) {
  .projects__description {
    font-size: 1.25rem; /* Font size for medium screens */
  }
}

@media (min-width: 1024px) {
  .projects__description {
    font-size: 1.5rem; /* Font size for larger screens */
  }
}

/* Ajuste general para todos los párrafos en la página */
/*p {
  max-width: 100%;
  word-wrap: break-word;
}

.section__projects{
  background-color: #242526;
  padding-block: 2rem 5rem;
  /* border: 1px solid green; */


.projects__title{
  color: var(--c-yellow-secondary);
}

.projects__description{
  color: #D2D2D2;
}

/********  Clases Section About  ********/

.section__about{
  /* padding-block: 5.8rem 7rem; */
  padding-bottom: 8rem;
}

.about__content{
  position: relative;

}

.about__title{
  margin-bottom: 3rem;
}

.about__content_seccion{
  padding: 20px;
  box-shadow: 3px 4px 24px 0px rgba(0, 0, 0, 0.05);
}

.about__title_Text{
  color: var(--c-yellow-primary);
  font-family: var(--ff-source-serif-4);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 25px;
  margin-bottom: 1.2rem;
  padding: 0 1.7rem;
  text-transform: capitalize;
}
.about_Text{
  text-align: justify;
  color: var(--c-grey-primary);
  font-family: var(--ff-montserrat);
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 0 1.7rem;
}


/********  Clases Section Contact  ********/
.section__contact {
  padding: 2rem 1rem;
  background-color: #f4f4f4;
}

.contact__content {
  text-align: center;
}

.contact__title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.contact__info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact__social {
  display: flex;
  justify-content: center;
  gap: 1.5rem; /* Espacio entre íconos, ajustado para pantallas más pequeñas */
  margin-top: 1rem;
}

.contact__social--link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px; /* Tamaño base del enlace */
  height: 60px; /* Tamaño base del enlace */
  background-color: #333;
  border-radius: 50%;
  color: #fff;
  transition: background-color 0.3s;
}

.contact__social--link:hover {
  background-color: #555;
}

.contact__icon-large {
  width: 30px; /* Tamaño del icono grande */
  height: 30px; /* Tamaño del icono grande */
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .contact__social {
    gap: 1rem; /* Ajuste de espacio entre íconos para pantallas medianas */
  }

  .contact__social--link {
    width: 50px; /* Tamaño del enlace para pantallas medianas */
    height: 50px; /* Tamaño del enlace para pantallas medianas */
  }

  .contact__icon-large {
    width: 24px; /* Tamaño del icono grande en pantallas medianas */
    height: 24px; /* Tamaño del icono grande en pantallas medianas */
  }
}

@media (max-width: 480px) {
  .contact__social {
    flex-direction: row; /* Cambio de dirección de columna a fila para íconos en pantallas pequeñas */
    gap: 0.5rem; /* Ajuste de espacio entre íconos para pantallas pequeñas */
  }

  .contact__social--link {
    width: 45px; /* Tamaño del enlace para pantallas pequeñas */
    height: 45px; /* Tamaño del enlace para pantallas pequeñas */
  }

  .contact__icon-large {
    width: 20px; /* Tamaño del icono grande en pantallas pequeñas */
    height: 20px; /* Tamaño del icono grande en pantallas pequeñas */
  }
}
/********  Clases Section Community  ********/
.section__community{
  background: #2E3339;
  padding-block: 2rem 10rem;
}

.community__logos--list{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.community__title{
  color: white;
  margin-bottom: 4rem;
}

.footer__bottom-body {
  background-color: #f9f9f9; /* Gris blancuzco */
  padding: 1rem 0;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
}

.footer__bottom-body p{
  font-size: 0.875rem;
  color: rgba(153, 153, 153, 0.8);
}

.footer__bottom-text {
  font-size: 0.875rem;
  color: #333;
}

.footer__terms {
  margin-top: 0.5rem;
}

@media (max-width: 600px) {
  .footer__bottom-body {
    padding: 0.5rem 0;
  }

  .footer__bottom-text {
    font-size: 0.75rem;
  }
}

</style>
