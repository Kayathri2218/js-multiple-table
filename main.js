let multi = Number(prompt("Enter multiple number : "));
let range = Number(prompt("Range :"));

for (i = 1; i <= range; i++) {
    let result = i * multi;
    document.write(`${i}*${multi}=${result}<br>`);
}