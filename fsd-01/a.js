// Fetch data from API
fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(data => {
        const meal = data.meals[0];

        const tableBody = document.querySelector("#mealTable tbody");

        const row = document.createElement("tr");


        row.innerHTML = `
      <td>${meal.strMeal}</td>
      <td>${meal.strCategory}</td>
      <td>${meal.strArea}</td>
      <td>${meal.strInstructions.substring(0, 150)}...</td>
      <td><img src="${meal.strMealThumb}" alt="${meal.strMeal}"></td>
    `;


        tableBody.appendChild(row);
    })
    .catch(error => console.error("Error fetching meal:", error));