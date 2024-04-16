const students = [
    { name: 'Fikri', address: "Jakarta, Indonesia", score: 20 },
    { name: 'Alif', address: "Bogor, Indonesia", score: 80 },
    { name: 'Diki', address: "Depok, Indonesia", score: 40 },
    { name: 'Adi', address: "Tangerang, Indonesia", score: 60 },
    { name: 'Budi', address: "Bandung, Indonesia", score: 50 }
]

const passed = [];
const isNotPassed = []

checkScore = () => {
    students.forEach((student) => {
        if (student.score < 50) {
            isNotPassed.push(student.name);
        } else {
            passed.push(student.name);
        }
    });
}

checkScore();
console.log(passed);
console.log(isNotPassed);