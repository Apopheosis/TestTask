const encode = input => [...input]
    .map((x, i) => [x.charCodeAt(0), i])
    .sort()
    .flatMap(x => x)
    .join('.')
    .match(/./g)
    .flatMap((x, i) => new Array(x == '.' ? 1 : 2 + x * 2).fill((1 + i) % 2))
    .join('')
    .replace(/(([01])\2*)/g, x => `${(+x ? '.' : '-')}${x.length}`)

const decode = input =>
    input
        .split(/(\.|\-|\/)/g)
        .splice(1)
        .map((_, i, a) => a.slice(i * 2, i * 2 + 2))
        .filter((el) => el.length)
        .map((x => [x[1] == 1 ? '.' : (x[1]-2)/2 ]))
        .join('')
        .split('.')
        .reduce((prev, cur, i, a) => !(i % 2) ? prev.concat([a.slice(i, i + 2)]) : prev, [])
        .sort((a1, a2) => a1[1]-a2[1])
        .flatMap(x => String.fromCharCode(x[0]))
        .join('')

//Значение строки из тестового задания - "i love puzzles", если прогнать её через функцию decode два раза
const encoded = encode(prompt())
console.log(encoded)
console.log(decode(decode(encoded)))