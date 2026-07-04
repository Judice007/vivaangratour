const SITE_CONFIG = {
  whatsappNumber: "5524999999999",
  instagramHandle: "@vivaangratour",
  instagramUrl: "https://www.instagram.com/vivaangratour/",
};

const WHATSAPP_NUMBER = SITE_CONFIG.whatsappNumber;

const defaultMessage =
  "Oi! Quero saber mais sobre os passeios da Viva Angra Tour. Pode me passar valores e disponibilidade?";

const form = document.querySelector("#quote-form");
const preview = document.querySelector("#message-preview");
const whatsappLinks = document.querySelectorAll("[data-whatsapp-link]");
const instagramLinks = document.querySelectorAll("[data-instagram-link]");
const tourLinks = document.querySelectorAll("[data-tour-link]");

function formatDate(value) {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

function buildUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getFormMessage() {
  const data = new FormData(form);
  const name = data.get("name")?.trim();
  const date = formatDate(data.get("date"));
  const people = data.get("people");
  const tour = data.get("tour");
  const departure = data.get("departure");
  const notes = data.get("notes")?.trim();

  const lines = [
    `Oi! Meu nome é ${name || "[nome]"}.`,
    `Quero cotar um passeio em Angra dos Reis.`,
    `Roteiro: ${tour}.`,
    `Ponto de saída: ${departure}.`,
    `Data desejada: ${date || "[data]"}.`,
    `Quantidade de pessoas: ${people || "[pessoas]"}.`,
    `Duração esperada: média de 6 horas.`,
  ];

  if (notes) {
    lines.push(`Observações: ${notes}.`);
  }

  return lines.join("\n");
}

function updateDefaultLinks() {
  whatsappLinks.forEach((link) => {
    link.href = buildUrl(defaultMessage);
  });

  instagramLinks.forEach((link) => {
    link.href = SITE_CONFIG.instagramUrl;
  });
}

function updatePreview() {
  if (!form || !preview) return;
  preview.textContent = getFormMessage();
}

updateDefaultLinks();
updatePreview();

form?.addEventListener("input", updatePreview);

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  window.open(buildUrl(getFormMessage()), "_blank", "noopener,noreferrer");
});

tourLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const tourName = link.dataset.tourLink;
    const message = `Oi! Quero cotar o passeio "${tourName}" em Angra dos Reis. Pode me passar valores, disponibilidade e ponto de saída?`;
    window.open(buildUrl(message), "_blank", "noopener,noreferrer");
  });
});
