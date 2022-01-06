function conselho() {
    const result = fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => data)
    .then((data) => {
        let output = document.getElementById('output');
        output.classList = 'output';
        output.innerHTML = `<div id='output__advice'>${data.slip.advice}</div><div class='output__author'>- Goat</div>`;

        const output_loading = document.getElementById('output--loading');
        output_loading.remove();
    })
}