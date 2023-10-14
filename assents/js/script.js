const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const bmi = (weight / (height * height)).toFixed(2);

    const value = this.getElementsByClassName('value');
    let description = '';

    document.getElementById('infos').classList.add('hidden');

    if(bmi < 18.5){
        description = 'cuidado! vocë está abaixo do peso!'

    }
    document.getElementById('description').textContent = description;
});
