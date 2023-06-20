var firebaseConfig = {
    
    apiKey: "AIzaSyCjlN75iI7Spi7l2U6yZIj1QjbzhheDuT4",
    authDomain: "survey-e6c05.firebaseapp.com",
    projectId: "survey-e6c05",
    storageBucket: "survey-e6c05.appspot.com",
    messagingSenderId: "1026024162270",
    appId: "1:1026024162270:web:677a9f5b86639696f2534f",
    measurementId: "G-VMY1WNZ8HL"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function submitForm() {
        var surname = document.querySelector('input[name="surname"]').value;
        var firstNames = document.querySelector('input[name="firstNames"]').value;
        var contactNumber = document.querySelector('input[name="contactNumber"]').value;
        var date = document.querySelector('input[name="date"]').value;
        var age = document.querySelector('input[name="age"]').value;
        var food = [];
        var foodCheckboxes = document.querySelectorAll('input[name="food"]:checked');
        foodCheckboxes.forEach(function (checkbox) {
          food.push(checkbox.value);
        });
        var eatOut = document.querySelector('input[name="eatOut"]:checked');
        var watchMovies = document.querySelector('input[name="watchMovies"]:checked');
        var watchTV = document.querySelector('input[name="watchTV"]:checked');
        var listenRadio = document.querySelector('input[name="listenRadio"]:checked');
      
        // Validate required fields
        if (!surname || !firstNames || !contactNumber || !date || !age || food.length === 0 || !eatOut || !watchMovies || !watchTV || !listenRadio) {
          alert("Please fill in all required fields.");
          return;
        }
      
        // Save data to Firebase database
        var database = firebase.database();
        var surveyRef = database.ref('surveys');
        var newSurveyRef = surveyRef.push();
        newSurveyRef.set({
          surname: surname,
          firstNames: firstNames,
          contactNumber: contactNumber,
          date: date,
          age: age,
          food: food,
          eatOut: eatOut.value,
          watchMovies: watchMovies.value,
          watchTV: watchTV.value,
          listenRadio: listenRadio.value
        });
      
        // Show success message and reset form
        alert("Survey submitted successfully!");
        window.location.href = "index.html";
        document.querySelector('form').reset();

        
      }
      