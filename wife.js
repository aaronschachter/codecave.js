let space = '';

function love() {
  space = space + '.';
  console.log(`${space}I LOVE MY WIFE`);
}

love();
for (let i = 0; i < 500; i++) {
  setInterval(love, 1000);
}
