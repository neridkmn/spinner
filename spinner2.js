const sentence = ['|', '/', '-', '\\', '-', '|'];

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${sentence[i]}   `);
  }, 100 + (i * 200));
}

setTimeout(() => {
  process.stdout.write("\n");
}, 1100); 