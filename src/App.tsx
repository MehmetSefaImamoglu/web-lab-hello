function App() {
  return (
    <>
      {/* Ana içeriğe atla bağlantısı - Tab ile gezinme için */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <h1>Sefa İmamoğlu — Kişisel Portföy</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>


      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure>
            <img
              src="/sefa.jpeg"
              alt="Sefa İmamoğlu'nun profil fotoğrafı"
            />
            <figcaption>Sefa İmamoğlu</figcaption>
          </figure>
          <p>
            Merhaba! Ben Sefa. Yazılım Mühendisliği okuyorum.
            Web teknolojilerine ilgi duyuyorum.
          </p>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>HTML5 & CSS3</li>
          </ul>
        </section>


        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>Web LAB-1 Projesi</h3>
            <p>Vite + React + TypeScript ile oluşturulan kişisel tanıtım sayfası.</p>
            <img
              src="https://via.placeholder.com/300x150"
              alt="Web LAB-1 projesinin ekran görüntüsü"
            />
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>Vite</li>
            </ul>
          </article>

          <article>
            <h3>Kişisel Portföy Sayfası</h3>
            <p>Semantik HTML5 ve erişilebilirlik ilkeleri ile oluşturulan portföy sayfası.</p>
            <img
              src="https://via.placeholder.com/300x150"
              alt="Kişisel portföy sayfasının ekran görüntüsü"
            />
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Erişilebilirlik (a11y)</li>
            </ul>
          </article>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2025 Sefa İmamoğlu. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App



