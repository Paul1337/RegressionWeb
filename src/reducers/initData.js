export function initData(updateStorage = false) {
    let people = [];

    const localData = localStorage.getItem('data');
    if (localData && !updateStorage) {
        people = JSON.parse(localData);
        console.log('Got local data');
        return people;
    }

    const peopleCnt = 300;
    const years = 5;
    const randomize = {
        // min: -250,
        // max: 250,

        min: -1500,
        max: 1500,
    };

    for (let i = 0; i < peopleCnt; i++) {
        const salary = getRandomSalary();
        const error = Math.round(Math.random() * (randomize.max - randomize.min) + randomize.min) * 1000;
        people.push({
            salary,
            creditSum: salary * 12 * years + error,
        });
    }

    localStorage.setItem('data', JSON.stringify(people));
    console.log('saved data');
    return people;
}

function getRandomSalary() {
    const a = 80;
    const b = 200;
    return Math.round(Math.random() * (b - a) + a) * 1000;
}
