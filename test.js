const fastnoise = require('.');
const fn = fastnoise({
  seed: 1337,
  frequency: 2,
  octaves: 2
});

let min = Infinity;
let max = -Infinity;
console.time('time');
for (let dx = 0; dx < 64; dx++) {
  for (let dz = 0; dz < 64; dz++) {
    const v = fn.in2D(1000 + dx, 1000 + dz);
    min = Math.min(v, min);
    max = Math.max(v, max);
  }
}
console.timeEnd('time');
console.log(min, max);

/* const FastSimplexNoise = require('fast-simplex-noise').default;
const noiseGen = new FastSimplexNoise({ frequency: 2, max: 1, min: -1, octaves: 1 });

min = Infinity;
max = -Infinity;
console.time('time2');
for (let dx = 0; dx < 64; dx++) {
  for (let dz = 0; dz < 64; dz++) {
    const v = noiseGen.scaled([1000 + dx, 1000 + dz])
    min = Math.min(v, min);
    max = Math.max(v, max);
  }
}
console.timeEnd('time2'); */
