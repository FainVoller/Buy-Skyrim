// ШАПКА САЙТА (HEADER)
// Сюда выносим логотип, навигационные ссылки и быструю кнопку.
export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        {/* Замените на название вашей команды, проекта или вставьте тег <img> с логотипом */}
        <div className="logo"><img src="/Bethesda.png" style={{ width: '100px', height: '70px' }}  alt="Бесезда" /></div>

        {/* Ссылки с якорным переходом (#id) плавно ведут к нужным блокам ниже */}
        <nav className="nav-menu">
          <a href="#services">Издания Skyrim</a>
          {/*<a href="#calculator">Калькулятор</a>*/}
          <a href="#portfolio">Купить Skyrim</a>
          <a href="#contact">Контакты</a>
        </nav>

        {/*<a href="#calculator" className="btn btn-secondary btn-sm">
          Рассчитать
        </a>*/}
      </div>
    </header>
  );
}