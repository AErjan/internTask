export const userItemMarkup = (name, email, phone) =>
  `<li class="users__item">
    <div class="user-card">
      <div class="user-card__name">${name}</div>
      <div class="user-card__body">
        <div class="user-card__email">
          <img
            class="user-card__email-icon"
            src="./img/email.png"
            alt="email icon"
          />
          <a class="user-card__link" href="mailto:${email}"
            >${email}</a
          >
        </div>
        <div class="user-card__tel">
          <img
            class="user-card__tel-icon"
            src="/img/tel.png"
            alt="telephon icon"
          />
          <a class="user-card__link" href="tel:${phone}"
            >${phone}</a
          >
        </div>
      </div>
    </div>
  </li>`;
