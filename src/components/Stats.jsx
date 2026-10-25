// ПРЕИМУЩЕСТВА / ЦИФРЫ В ФАКТАХ (STATS)
// Цифры привлекают внимание и вызывают доверие.
export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        <div className="stat-card">
          <div className="stat-number">10+ лет</div>
          <div className="stat-label">Опыт в игро-индустрии</div>
          <p className="stat-text">Куча всего есть но ничего не работает :)</p>
        </div>

        <div className="stat-card">
          <div className="stat-number">5 сек.</div>
          <div className="stat-label">Скорость работы</div>
          <p className="stat-text">Купи Скайрим</p>
        </div>

        <div className="stat-card">
          <div className="stat-number">100%</div>
          <div className="stat-label">Контроль качества</div>
          <p className="stat-text">100% потратишь деньги, 45% что получишь игру</p>
        </div>

        <div className="stat-card">
          <div className="stat-number">Договор</div>
          <div className="stat-label">Никаких гарантий</div>
          <p className="stat-text">Внимание: игра не запуститься на микроволновке!!!!</p>
        </div>
      </div>
    </section>
  );
}