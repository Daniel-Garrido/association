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
      <h2 class="contact__title section__title">
        contact
      </h2>
      <formContact />

    </div>
  </section>


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
  text-align: center;
  color: #fff;
  font-family: var(--ff-montserrat);
  font-size: 1.2rem;
  font-weight: 400;
  font-variant: small-caps;
  letter-spacing: 0.18rem;
}

.presentacion__title {
  text-align: center;
  color: #fff;
  font-family: var(--ff-montserrat);
  font-size: 3rem;
  font-weight: 700;
  font-variant: small-caps;
  width: 724px;
  margin-bottom: 1rem;
}

.presentacion__description {
  text-align: center;
  color: #fff;
  font-family: var(--ff-montserrat);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  width: 692px;
}

/*responsive a la seccion de inicio */
@media(max-width: 800px){
  .presentacion__intro{
    text-align: center;

}
.presentacion__title{
  text-align: center;
  font-size: 3.5rem;
}

}

@media(max-width: 400px){ 
.presentacion__title{
  width: 340px;
  font-size: 1.5rem;
}

.presentacion__description {
  font-size: 0.8rem;
  width: 320px;
}
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
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}
/**responsive a las cards  */

@media(max-width:750px){
 .card1__card--list{
  flex-direction: column;
 }
}


/** */
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

@media(max-width: 400px){

  .card1__title{
 
    font-size: 1.5rem;
    padding-left: 5px;
    padding-right: 5px;
}
  .card1__description{
  color: red;
  font-size: 0.9rem;
 
 

}
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

/* media query para el titulo y subtitulo de la seccion de proyectos */
@media (max-width: 400px) {
  .projects__title{
    font-size: 1.5rem;
  }
  .projects__description {
    font-size: 0.9rem;
    padding: 0px;
  }

  .projects__content{
    margin-bottom: 0rem
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
  padding-bottom: 5rem;
}

.about__content{
  position: relative;

}

.about__title{
  margin-bottom: 1rem;
}

.about__content_seccion{
  width: 85%;
  
  padding: 1rem;
  margin:2rem;
  box-shadow: 3px 4px 24px 0px rgba(0, 0, 0, 0.2);
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

/**media query para la seccion de about */
@media (max-width: 400px) {
  .about__content_seccion {
    width: 90%; 
    margin: 1rem;
    padding: 0.5rem; 
  }

  .about__title_Text {
    font-size: 1.2rem; 
    line-height: 20px; 
    padding: 0 1rem; 
  }

  .about_Text {
    font-size: 0.8rem; 
    line-height: 20px; 
    padding: 0 1rem; 
  }
}


/********  Clases Section Contact  ********/
.section__contact{
  padding-bottom: 10rem;

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

</style>
