$(() => {
  // --------------STEP 1---------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  Array.from($('p')).forEach((p) => {
    const words = $(p).text().split(' ');
    const $p = $(p);
    $p.text('');
    words.forEach((word) => {
      if (word) {
        $p.append($('<span>').text(`${word} `));
      }
    });
  });


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  /**
   * Get a random hex color
   * @returns {string} Random hex color (RGB format)
   */
  const getRandomHexColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  };

  // Once per second
  setInterval(() => {
    $.each($('span'), (index, value) => {
      value.style.color = getRandomHexColor();
    });
  }, 1000);
});
