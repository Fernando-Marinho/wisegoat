function htmlLoading(container) {
  const output = document.getElementById("output");
  if (output) {
    output.remove();
  }
  const loading = document.createElement("div");
  loading.classList = "output--loading";
  loading.setAttribute("id", "output--loading");
  loading.innerHTML = `
  <div class='output--loading__advice'>&nbsp;</div>
  <div class='output--loading__advice'>&nbsp;</div>
  <div class='output--loading__author'>&nbsp;</div>`;

  container.prepend(loading);
}

function conselho() {
  const container = document.getElementById("container-conselho");

  htmlLoading(container);

  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => data)
    .then((data) => {
      const output = document.createElement("div");
      output.classList = "output";
      output.setAttribute("id", "output");
      output.innerHTML = `
        <div id='output__advice'>${data.slip.advice}</div>
        <div class='output__author'>- Goat</div>
        <div class="btn_novo_conselho"><button class="btn" onclick="conselho()">Novo Conselho</button></div>`;

      const output_loading = document.getElementById("output--loading");
      if (output_loading) {
        output_loading.remove();
      }

      container.prepend(output);
    });
}
