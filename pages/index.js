import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div class="container-fluid">
           <div class="container profile-container">
               <div class="row">
                   <div id="menu-jk" class="col-md-4">
                       <div class="pro-s-cover">
                           <img src="/profile.jpg" alt=""/>
                           <h6>Екатерина Заикина</h6>
                           <p>Психолог</p>
                       </div>
                       <div class="con-cover">
                           <h4>Contact</h4>
                           <div class="cd-ro row no-margin">
                               <span>Telegram</span>
                               <p><a href="https://t.me/katerina_zaikina">@katerina_zaikina</a></p>
                           </div>
                           <div class="cd-ro row no-margin">
                               <span>Email</span>
                               <p><a href="mailto:zaikina.katerina@gmail.com">zaikina.katerina@gmail.com</a></p>
                           </div>
                       </div>
                   </div>
                   <div class="col-md-8">
                       <div class="data-box">
                           <h2>Обо мне</h2>
                           <p>Я недирективный терапевт — это значит, что свою задачу я вижу в том, чтобы создать условия, создать безопасное и доверительное пространство, в котором вы смогли бы открыть себя. </p>
                           <p>Психология — моё второе образование. А по первому я — инженер-программист, и до декрета работала в IT. Затем какое-то время я на общественных началах была учителем в частной русской школе. </p>
                           <p>У меня двое детей. И я хорошо понимаю, что быть мамой — это работа, которая требует умения и выносливости. Глядя на своих детей и на детей в школе, я стала интересоваться детской психологией. Читала Петрановскую, Млодик. Тогда я и решила стать психологом — мне захотелось сделать это своей миссией. Исцеляя себя, человек несёт в свою семью и в мир уверенность, спокойствие и благополучие — и делает вклад в будущие поколения.</p>
                           <p>Из всех психологических методов и подходов мне наиболее откликнулись идеи Виктора Франкла о том, что жизнь всегда имеет смысл. Я получила образование как экзистенциальный терапевт и начала частную практику. При этом в психологии так много всего интересного, что я дополнительно прошла ещё несколько курсов (арт-терапия, транзактный анализ и др.), которые расширили моё видение как терапевта.</p>
                           <p>Кардинальная смена профессии требует большой устойчивости и веры в себя. Если перед вами тоже стоит такой вопрос — я готова помочь.</p>
                           <p>С 2016 года я живу в Англии. И мне очень понятны переживания человека, который меняет страну, сталкивается со сменой окружения. Чувствует разочарование, тревогу: «Справлюсь я или нет? Правильным ли было это решение или стоило выбрать другую страну?» У человека происходит большая переоценка ценностей, по-новой приходится выстраивать свою личность — и я готова быть с вами в этом процессе.</p>
                           <p>Я верю в ваши силы и способности. И предоставлю свои профессиональные знания, навыки и поддержку для вашего развития, чтобы вы сами управляли своей жизнью. Чтобы вы могли понять, что хотите и какое решение является для вас самым верным. Чтобы вы обрели внутреннюю опору и уверенный взгляд в будущее. В результате ваша жизнь может измениться целиком и полностью, а может внешне остаться такой же, как была — но у вас появится ощущение не «мной живут», а «я живу».</p>
                           <p>Мне интересно, как устроены люди, я интроверт — внимательно слушаю и пропускаю человека через себя. Мне важно, что он думает, чего боится, как у него складывается жизнь. И как терапевту мне ценно увидеть то значимое, что порой скрыто за словами, и понять вас.</p>
                           <p>Буду рада знакомству!</p>
                       </div>
                        <div class="data-box">
                           <h2>Опыт работы</h2>
                           <div class="row exp-row">
                               <h6>Психолог</h6>
                               <span>Частная практика с апреля 2020</span>
                               <p>Более 600 проведённых сессий</p>
                           </div>
                       </div>

                       <div class="data-box education-detail">
                           <h2>Методы и подходы</h2>
                            <div class="service no-margin row">
                              <div class="col-sm-12">
                                  <h5>Арт-терапия</h5>
                                  <p>Арт-терапия — дословно «излечение с помощью творчества». Творческие техники используются для выражения чувств и эмоций, проработки стресса, лучшего понимания себя. Особенно хорошо эти техники показывают себя в работе с детьми, но также часто используются в работе со взрослыми.</p>
                              </div>
                          </div>
                          <div class="service no-margin row">
                              <div class="col-sm-12">
                                  <h5>Экзистенциальный анализ</h5>
                                  <p>Подход, который помогает обрести смысл, принять ответственность за свою жизнь, чувствовать себя свободно и открыто по отношению к миру. Основная цель экзистенциальной терапии — научить клиента действовать из «свободной воли», самостоятельно выбирать свой жизненный путь и нести ответственность за выбор.</p>
                              </div>
                          </div>
                       </div>
                       <div class="data-box education-detail">
                           <h2>Образование</h2>
                            <div class="service no-margin row">
                              <div class="col-sm-3 no-padding resume-dat serv-logo">
                                  <h6>2017-2021</h6>
                                <p>Бакалавр</p>
                              </div>
                              <div class="col-sm-9 rgbf">
                                  <h5>Московский институт психоанализа.</h5>
                                  <p>«Психология»</p>
                              </div>
                          </div>
                          <div class="service no-margin row">
                              <div class="col-sm-3 no-padding resume-dat serv-logo">
                                  <h6>2020</h6>
                              </div>
                              <div class="col-sm-9 rgbf">
                                  <h5>Московский институт психоанализа.</h5>
                                  <p>«Логотерапия и экзистенциальный анализ»</p>
                              </div>
                          </div>
                          <div class="service no-margin row">
                              <div class="col-sm-3 no-padding resume-dat serv-logo">
                                  <h6>2020</h6>
                              </div>
                              <div class="col-sm-9 rgbf">
                                  <h5>Институт практической психологии «Иматон».</h5>
                                  <p>«Интегративная голосовая терапия в практике психологического консультирования».</p>
                              </div>
                          </div>
                          <div class="service no-margin row">
                              <div class="col-sm-3 no-padding resume-dat serv-logo">
                                  <h6>2019</h6>
                              </div>
                              <div class="col-sm-9 rgbf">
                                  <h5>Институт практической психологии «Иматон».</h5>
                                  <p>«Методы арт-терапевтической психодиагностики».</p>
                              </div>
                          </div>
                          <div class="service no-margin row">
                              <div class="col-sm-3 no-padding resume-dat serv-logo">
                                  <h6>2018</h6>
                              </div>
                              <div class="col-sm-9 rgbf">
                                  <h5>Институт практической психологии «Иматон».</h5>
                                  <p>«Метафорические ассоциативные карты в работе психолога». </p>
                              </div>
                          </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    </div>
  )
}
