// ПЕРВЫЙ ЭКРАН (HERO)
// Самое важное место: за 3 секунды человек должен понять, о чем ваш сайт.
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-content">

        {/* Главный оффер: Какую задачу вы решаете? */}
        <h1 className="hero-title">
          КУПИ SKYRIM!!!!
        </h1>

        {/* 2-3 предложения с деталями */}
        <p className="hero-description">
           У нас есть Special edition, Anniversary edition, Legendary Edition и куча куча бесполезных дополняшек
        </p>

        {/* Две основные кнопки действия */}
        <div className="hero-actions">
          <a href="#portfolio" className="btn btn-primary">
            Посмотреть фото
          </a>
          <a href="#calculator" className="btn btn-outline">
            Купить Skyrim
          </a>
        </div>
      </div>
    </section>
  );
}