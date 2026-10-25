// НАПРАВЛЕНИЯ / КАРТОЧКИ УСЛУГ (SERVICES)
// Показываем, с какими категориями задач вы работаете.
export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Издания Skyrim</h2>
          <p>Выберите подходящий</p>
        </div>

        <div className="services-grid">
          {/* Карточка 1 */}
          <div className="service-card">
            <div className="card-image-placeholder"><img src="/Skyrim.png" style={{ width: '400px', height: '400px' }}  alt="Обычный Skyrim" /></div>
            <div className="card-body">
              <span className="card-tag">Skyrim</span>
              <h3>Базовый</h3>
               <p>Год выпуска: 2011</p>
              <p>Самый первый Skyrim.</p>
              <div className="card-price">от 600 ₽</div>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="service-card">
            <div className="card-image-placeholder"><img src="/Special.jpg" style={{ width: '400px', height: '400px' }}  alt="Special Edition" /></div>
            <div className="card-body">
              <span className="card-tag">Skyrim Special Edition</span>
              <h3>Издание Special</h3>
              <p>Год выпуска: 2016</p>
              <p>Переработанная цветовая гамма, Улучшенное освещение, Новые графические эффекты, Повышенная детализация.</p>
              <p>Включены DlC Dawnguard Dragonborn и Hearthfire </p>
              <div className="card-price">от 800 ₽</div>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="service-card">
            <div className="card-image-placeholder"><img src="/Anniversary.jpg" style={{ width: '400px', height: '400px' }}  alt="Anniversary Edition" /></div>
            <div className="card-body">
              <span className="card-tag">Skyrim Anniversary Edition</span>
              <h3>Издание Anniversary</h3>
              <p>Год выпуска: 2021</p>
              <p>Добавлена технология Precipitation Occlusion, улучшенное глобальное освещение (HBAO+), Поддержка модов.</p>
              <p>Контент из Creation Club, Режим выживания, Механика рыбалки, Фермерство, Квестовые линии из предыдущих частей серии</p>
              <div className="card-price">от 1 200 ₽</div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}