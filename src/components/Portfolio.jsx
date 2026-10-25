// БЛОК РЕЗУЛЬТАТОВ (ПРИМЕРЫ / ДО И ПОСЛЕ)
// Наглядное доказательство ценности вашей работы.
export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <h2>Всякие фоточки</h2>
          <p>Посмотрите, что вас</p>
        </div>

        {/* Макет сравнения "Было / Стало" */}
        <div className="comparison-mockup">
        

            <p><img src="/1.jpg" style={{ width: '400px', height: '400px' }}  /></p>
            <p><img src="/5.jpg" style={{ width: '400px', height: '400px' }} /></p>
            <p><img src="/7.jpg" style={{ width: '400px', height: '400px' }} /></p>
        </div>

        <div className="center-action">
          <button className="btn btn-secondary">
            Посмотреть все примеры →
          </button>
        </div>
      </div>
    </section>
  );
}