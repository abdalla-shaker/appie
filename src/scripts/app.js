class Content {
  color;

  constructor(color) {
    this.color = color;
  }
}

const content = {
  content: [
    new Content("#60A5FA"),
    new Content("#F87171"),
    new Content("#1E40AF"),
    new Content("#F59E0B"),
    new Content("#3730A3"),
    new Content("#047857"),
  ],
  render() {
    const rowCards = document.getElementById("row-of-cards-1");
    for (const cont of this.content) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="logo-container flex-display center" style="background-color: ${cont.color} !important">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="size-6 message">
            <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
          </svg>
        </div>
        <h3>fast and intuitive</h3>
        <p>Oxford posh bevvy give us a bell gutted mate spend a penny quaint cockup plastered.</p>
        <a href="#" class="flex-display align-center">Read More <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6 right-arrow"
        >
          <path
            fill-rule="evenodd"
            d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>
        </a>
      `;
      rowCards.append(card);
    }
  },
};

content.render();
