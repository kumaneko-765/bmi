
let hight;
let weight;


function func() {

    hight = document.getElementById('height').value / 100;
    weight = document.getElementById('weight').value;

    let bmi = weight / hight**2;
    document.getElementById('rebmi').value= Math.round(bmi * 100) / 100;
    
    let aw = hight**2 * 22;
    document.getElementById('reaw').value= Number(aw);

};


