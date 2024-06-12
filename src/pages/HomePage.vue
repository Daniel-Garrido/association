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
  <section
    class="section__presentacion"
    id="home">
    <div class="presentacion__filter"></div>

    <div
      class="presentacion__content container"
      data-aos="fade-up"
      data-aos-duration="1000">
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

  <!-- Section cards1 -->
  <section class="section__card1" id="jounal">
    <div
      class="card1__content container"
      data-aos="fade-up"
      data-aos-duration="1000">
      <h2 class="card1__title section__title">
        Expand Your Peer Network, Enhance Your Professional
        <br>
        <span>Stature & Achieve Your Personal Career Goals </span>
      </h2>
      <p class="card1__description section__description">
        Your local chapter and ISSA International will provide you with a wealth of resources to keep you current with industry trends and developments in our ever-evolving field. What can we do for you today?
      </p>
      <ul class="card1__card--list">
        <li class="card1__card--item" v-for="item in listCard1">
          <card1
            :src="item.src"
            :title="item.title"
            :description="item.description" />
        </li>
      </ul>
    </div>
  </section>

  <!-- Section Events -->
  <section class="section__events" id="events">
    <div
      class="events__content container"
      data-aos="fade-up"
      data-aos-duration="1000">
      <h2 class="section__title events__title">
        events
      </h2>
      <p class="events__description section__description">
        From our annual International Summit and web conferences to our quarterly Cyber Executive Forums and chapter events, there's always something going on.
      </p>
      <ul class="events__cards--list">
        <li class="events__cards--item" v-for="event in listEvents">
        <cardEvent
          :src="event.src"
          :title="event.title"
          :date="event.date" />
        </li>
      </ul>
    </div>
  </section>

  <!-- Section Conferences -->
  <section class="section__conferences" id="conferences">
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
  </section>

  <!-- Section Projects -->
  <section class="section__projects" id="projects">
    
    <div
      class="projects__content container"
      data-aos="fade-right"
      data-aos-duration="950">
      <h2 class="projects__title section__title">
        Projects
      </h2>
      <p class="projects__description section__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna augue, condimentum id elit nec, facilisis lobortis magna.
      </p>
    </div>
    <sliderProjects
      data-aos="fade-right"
      data-aos-duration="950"
      :list-proyects="listProjects" />
  </section>

  <!-- Section About -->
  <section class="section__about" id="about">
    <div
      class="about__content container"
      data-aos="fade-up"
      data-aos-duration="1000">
      
      <h2 class="about__title section__title">
        About
      </h2>

      <!-- <figure class="about__figure--img">
        <img :src="'src\\assets\\imagenes\\home\\logo__maikron.png'" alt="" class="about__img">
      </figure>
      
      <p class="about__description section__description">
        Experience the pinnacle of information security at the 2023 ISSA International Awards Gala. Join us to celebrate outstanding achievements, gain exclusive insights from industry experts, expand your network, and immerse yourself in the electric energy of Las Vegas.
      </p> -->

    <h1 class="about__title section__title"> Historia</h1>
    <p class="about__description section__description">
      En el contexto de México, como en muchas otras partes del mundo, la inteligencia artificial (IA) a menudo ha sido envuelta en un velo de misterio y especulación. Desde los relatos de ciencia ficción hasta los debates sobre el futuro del trabajo, la IA ha sido tema de fascinación y preocupación en igual medida. Sin embargo, en medio de estos mitos y percepciones distorsionadas, México se encuentra en una encrucijada única: tiene el potencial de aprovechar los beneficios de la IA para impulsar el progreso económico y social, al tiempo que enfrenta desafíos particulares en términos de acceso, capacitación y regulación.
      Es de esta forma que, en un mundo donde los avances tecnológicos y la inteligencia artificial a menudo son vistos con escepticismo y temor, nace la Asociación MAIKRON, fundada por un grupo de visionarios y entusiastas de la tecnología y la ciencia. La razón del nacimiento de dicha asociación radica en demostrar que la IA y la tecnología pueden ser fuerzas positivas que contribuyen al bienestar de la sociedad.
    </p>

    <h1 class="about__title section__title" > Misión</h1>
    <p class="about__description section__description" >
      Impulsar el uso responsable y ético de la tecnología y la inteligencia artificial para mejorar la calidad de vida de las personas y contribuir al desarrollo sostenible de México y del bienestar de su sociedad. 
    </p>

    <h1 class="about__title section__title" > Visión</h1>
    <p class="about__description section__description" >
      Ser líder en el uso responsable y ético de la tecnología y la inteligencia artificial en México, siendo reconocida por su aporte al bienestar de las personas y al desarrollo sostenible del país.
    </p>

      </div>
  </section>

  <!-- Section Community -->
  <!-- <section class="section__community" id="community">
    <div
      class="community__content container"
      data-aos="fade-up"
      data-aos-duration="1000">
      <h2 class="community__title section__title">
        community
      </h2>
      <ul class="community__logos--list">
        <li class="community__logos--item" v-for="logo in listLogosCommunity">
          <cardLogo :src="logo.src"/>
        </li>
      </ul>
    </div>
  </section> -->

  <!-- Section Contact -->
  <section class="section__contact" id="contact">
    <div
      class="contact__content container"
      data-aos="fade-up"
      data-aos-duration="1000">
      <h2 class="contact__title section__title">
        contact
      </h2>
      <formContact/>
    </div>
  </section>


</template>

<style scoped>
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
  background: url("src\\assets\\imagenes\\home\\img1.png"),
    center/ cover no-repeat;
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
  padding: 159px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
}

.events__cards--list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 3.1rem;
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


/********  Clases Section Projects  ********/
.section__projects{
  background-color: black;
  padding-block: 2rem 5rem;
  /* border: 1px solid green; */
}

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
  margin-bottom: 5.1rem;
}

.about__figure--img{
  width: 87px;
  height: 87px;
  background-color: black;
  border-radius: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 556.5px;
  top: 170px;
}

.about__img{
  width: 64px;
  height: 54px;
}

.about__description{
  width: 834px;
  margin-bottom: 0;
  box-shadow: 3px 4px 24px 0px rgba(0, 0, 0, 0.05);
  padding: 4.7rem 3.2rem 2.75rem 3.2rem;
  line-height: 1.6rem;
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
