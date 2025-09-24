let note1, note2, note3, result;

note1 = 80; 
note2 = 80;
note3 = 80;

const noteMedia = (note1 + note2 + note3)/3;

console.time('all');
console.time('note 1');

if (note1 == 0){
    console.log('you got zero');
}
else if (note1 <= 59){
    console.log(`F(${note1})`);
}
else if (note1 >= 60 && note1 <= 69){
    console.log(`D(${note1})`);
}
else if (note1 >= 70 && note1 <= 79){
    console.log(`C(${note1})`);
}
else if (note1 >= 80 && note1 <= 89){
    console.log(`B(${note1})`);
}
else if (note1 >= 90 && note1 <= 100){
    console.log(`A(${note1})`)
}

console.timeEnd('note 1');
console.log('\n')
console.time('note 2');

if (note2 == 0){
    console.log('you got zero');
}
else if (note2 <= 59){
    console.log(`F(${note2})`);
}
else if (note2 >= 60 && note2 <= 69){
    console.log(`D(${note2})`);
}
else if (note2 >= 70 && note2 <= 79){
    console.log(`C(${note2})`);
}
else if (note2 >= 80 && note2 <= 89){
    console.log(`B(${note2})`);
}
else if (note2 >= 90 && note2 <= 100){
    console.log(`A(${note2})`)
}

console.timeEnd('note 2');
console.log('\n')
console.time('note 3');

if (note3 == 0){
    console.log('you got zero');
}
else if (note3 <= 59){
    console.log(`F(${note3})`);
}
else if (note3 <= 69){
    console.log(`D(${note3})`);
}
else if (note3 <= 79){
    console.log(`C(${note3})`);
}
else if (note3 <= 89){
    console.log(`B(${note3})`);
}
else if (note3 <= 100){
    console.log(`A(${note3})`)
}
console.timeEnd('note 3');

result = (noteMedia >= 70) ? "Passed" : "Reproved";

console.log(`\nPassed: ${result}\nnote: ${Math.round(noteMedia)}\n`);
console.timeEnd('all');