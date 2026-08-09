let btn = document.getElementById("generateBtn");
let marksInput = document.getElementById("marks");
let marksValue = document.getElementById("marksValue");


// marks value show

marksInput.addEventListener("input", function () {
    marksValue.innerHTML = marksInput.value;
});



// get value


btn.addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    // gender
    let gender = document.querySelector('input[name="gender"]:checked');
    gender = gender ? gender.value : "--";

    // coruse

    let selectedCourse = document.querySelectorAll('input[type="checkbox"]:checked');
    let coruse = [];
    selectedCourse.forEach((c) => coruse.push(c.value));


    // marks


    let marks = marksInput.value;

    // show card

    document.getElementById("cardName").innerText = name || "Student Name";
    document.getElementById("cardRoll").innerText = roll ? "Roll No : " + roll : "Roll No : --";
    document.getElementById("cardEmail").innerText = email ? "Email : " + email : "Email :  --";
    document.getElementById("cardAge").innerText = age ? "Age : " + age : "Age :  --";
    document.getElementById("cardGender").innerText = "Gender :" + gender;


    document.getElementById("cardCourses").innerText = coruse.length
        ? "Course :" + coruse.join(",")
        : "Course : --";

    document.getElementById("cardMarks").innerText = "Marks :" + marks + "/100";




    // images


    const photoInput = document.getElementById("photo");
    const cardImage = document.getElementById("cardImage");

    if (photoInput.files && photoInput.files[0]) {

        const reader = new FileReader();

        reader.onload = function (e) {
            cardImage.src = e.target.result;
        };

        reader.readAsDataURL(photoInput.files[0]);

    } else {

        cardImage.src = "https://picsum.photos/200";

    }



});






