function footer(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `<footer class="footer">
  <div class="footer-container">
    <img
      src="https://i.ibb.co/vwzNRCH/Lore-blanco-png.png"
      alt=""
      class="footer-container__img"
    />
    <div class="footer-container__media-container">
      <div class="media-container__insta">
        <a target="_blank" href="https://www.instagram.com/loreburgi_/"
          >Instagram</a
        ><img src="https://cdn.pixabay.com/photo/2016/08/01/21/02/icon-1562139_960_720.png" alt="" />
      </div>
      <div class="media-container__linkedin">
        <a target="_blank" href="https://www.linkedin.com/in/lorenzo-burgi/"
          >Linkedin</a
        ><img src="https://familypaths.org/wp-content/uploads/2017/10/Logos-Linkedin-icon.png" alt="" />
      </div>
      <div class="media-container__github">
        <a target="_blank" href="https://github.com/LoreBurgi">Github</a
        ><img src="https://img.icons8.com/wired/452/github.png" alt="" />
      </div>
    </div>
  </div>
</footer>`;

  el.appendChild(componentEl);
}
