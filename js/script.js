function calculateBmi() {
    // Input value
    var weight = parseFloat(document.getElementById("input-weight").value);
    var height = parseFloat(document.getElementById("input-height").value) / 100; // Convert ke meter
    var age = parseInt(document.getElementById("input-age").value);
    var gender = document.querySelector('input[name="sex"]:checked').value;

    // Perhitungan BMI
    var bmi = weight / (height * height);

    // perhitungan categori  BMI
    var bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = "Kekurangan Berat badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = "Kelebihan Berat Badan";
    } else {
        bmiCategory = "Obesitas";
    }

    // Menampilkan Hasil Perhitungan
    document.getElementById("bmi-value").innerText = bmi.toFixed(2);
    document.getElementById("bmi-category").innerText = "Anda " + bmiCategory;

    // Scroll to result section
    document.getElementById("container-result").scrollIntoView();
}

function resetForm() {
    // Reset Input
    document.getElementById("input-weight").value = "";
    document.getElementById("input-age").value = "";
    document.getElementById("input-height").value = "";

    // Reset Hasil
    document.getElementById("bmi-value").innerText = "0";
    document.getElementById("bmi-category").innerText = "";
}