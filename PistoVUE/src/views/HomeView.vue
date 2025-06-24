<!-- Homepage --> 

<template>
  <main class="home-content">
    <h1 class="home-title font-merriweather">La Nostra Storia</h1>
    
    <div class="home-text font-merriweather">
      <h2 class="font-merriweather">Come Nasce il Progetto</h2>
      <p>Il nostro progetto nasce nel <b>2025</b> dalla passione profonda per i sapori autentici della terra sarda che ci unisce. Siamo <b>quattro ragazzi</b> che frequentano l'<strong>Università di Cagliari</strong> e che, nel tempo libero, ci dedichiamo con entusiasmo alla degustazione dei dolci tradizionali della nostra amata Sardegna.</p>

      <h2 class="font-merriweather">La Nostra Missione</h2>
      <p>Vogliamo <strong>diffondere la cucina sarda nel mondo</strong>, portando oltre i confini dell'isola quei sapori unici che raccontano secoli di tradizione e cultura. La nostra terra custodisce ricette preziose tramandate di generazione in generazione, e noi ci sentiamo i guardiani di questo patrimonio gastronomico.</p>

      <h2 class="font-merriweather">Cosa Facciamo</h2>
      
      <h3 class="font-merriweather">Eventi di Degustazione</h3>
      <p>Organizziamo e sponsorizziamo <strong>eventi di degustazione</strong> in cui facciamo scoprire al pubblico la ricchezza e la varietà dei dolci sardi tradizionali. Ogni assaggio è un viaggio nella storia e nelle tradizioni della nostra isola.</p>

      <h3 class="font-merriweather">Workshop Tradizionali</h3>
      <p>Conduciamo <strong>workshop per imparare a fare i dolci in maniera tradizionale</strong>, insegnando le tecniche antiche e i segreti che solo l'esperienza può tramandare. Ogni partecipante porta a casa non solo le ricette, ma anche un pezzo della nostra cultura.</p>

      <h2 class="font-merriweather">Il Cuore della Produzione: Nonna Gavina</h2>
      <p>I nostri prodotti sono <strong>preparati a mano da Nonna Gavina</strong> con l'aiuto prezioso dei suoi nipoti. Le sue mani esperte custodiscono i segreti di ricette antiche, mentre i giovani apprendono e perpetuano questa tradizione millenaria.</p>
      <p>Ogni dolce che esce dal suo laboratorio artigianale porta con sé l'amore per la tradizione e la genuinità degli ingredienti selezionati.</p>

      <h2 class="font-merriweather">Ingredienti a Chilometro Zero</h2>
      <p>La nostra filosofia si basa sulla <b>qualità e genuinità</b> degli ingredienti:</p>
      <ul>
        <li><b>Uova fresche</b> dalle nostre campagne</li>
        <li><b>Mandorle</b> dai nostri alberi secolari</li>
        <li><b>Latte</b> dai pascoli dell'entroterra sardo</li>
        <li><b>Miele</b> dalle api che bottinano tra mirto e corbezzolo</li>
        <li><b>Farine</b> macinate nei mulini locali</li>
      </ul>
      <p>Tutto rigorosamente <b>a chilometro zero</b>, perché crediamo che la vera bontà nasca dal rispetto per il territorio e dalle sue risorse naturali.</p>

      <h2 class="font-merriweather">La Nostra Visione</h2>
      <p>Siamo giovani, studiamo, sogniamo e lavoriamo per un futuro in cui i sapori autentici della Sardegna possano essere apprezzati in tutto il mondo, mantenendo intatte le loro radici e la loro identità.</p>
      <p>Ogni dolce che produciamo è un ponte tra passato e futuro, tra tradizione e innovazione, tra la nostra piccola isola e il mondo intero.</p>
    </div>
  </main>
</template>

<style scoped>
.home-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.home-title {
  font-size: 2.5rem;
  color: #074079;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.home-intro {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 0.75rem;
  color: #333;
}

.home-text {
  line-height: 1.8;
  color: #333;
}

.home-text p {
  margin-bottom: 1.5rem;
  text-align: justify;
}

h2 {
  font-size: 1.8rem;
  color: #074079;
  margin: 2rem 0 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

h3 {
  font-size: 1.4rem;
  color: #0a5aa5;
  margin: 1.5rem 0 0.8rem;
}

ul {
  list-style-type: none;
  padding-left: 1.5rem;
  margin: 1rem 0;
}

li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

li:before {
  content: "•";
  color: #074079;
  font-size: 1.2em;
  position: absolute;
  left: 0;
}

strong {
  color: #074079;
  font-weight: 600;
}

b{
  color: #074079;
  font-weight: 600;
}

/* Stili responsivi per dispositivi mobili */
@media (max-width: 768px) {
  .home-content {
    padding: 1rem;
  }

  .home-title {
    font-size: 2rem;
  }

  .home-intro {
    font-size: 1.1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
  }
}
</style>
