// ПОДВАЛ (FOOTER)
// Копирайт, авторские права и ссылка на авторов.
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>All Rights Reserved © {new Date().getFullYear()}</div>
        <div>Разработчик: FainVoller</div>
      </div>
    </footer>
  );
}