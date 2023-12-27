document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Recipe generator function using the Spoonacular API
    async function generateMealPlan() {
        const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
            params: {
                // Parameters for the recipe search
                query: 'pasta',
                cuisine: 'italian',
                // ... (other parameters)
            },
            headers: {
                'X-RapidAPI-Key': 'a1a2e2c864mshe700fbe0a7f55acp1151efjsnb5e52d286d5e',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            // Handle the response data as needed
        } catch (error) {
            console.error(error);
        }
    }

    // Call the recipe generator function on button click
    const generateBtn = document.getElementById('generateBtn');
    generateBtn.addEventListener('click', generateMealPlan);
});
