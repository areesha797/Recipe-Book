const recipes = {
  breakfast: [
    {
      name: "Avocado Toast",
      image: "images/avocado-toast.jpeg",
      ingredients: [
        "2 slices of whole grain bread",
        "1 ripe avocado",
        "Salt to taste",
        "Chili flakes (optional)",
        "Lemon juice"
      ],
      instructions: [
        "Toast the bread slices until golden brown.",
        "Mash the avocado with salt and lemon juice.",
        "Spread the avocado mixture on the toast.",
        "Sprinkle chili flakes for added flavor.",
        "Serve immediately."
      ]
    },
    {
      name: "Muffins",
      image: "images/muffins.jpeg",
      ingredients: [
        "2 cups flour", "1/2 cup sugar", "1 tsp baking powder", "1 egg", "1 cup milk"
      ],
      instructions: [
        "Preheat oven to 375°F.",
        "Mix all ingredients in a bowl.",
        "Pour batter into muffin tray.",
        "Bake for 20 minutes.",
        "Cool before serving."
      ]
    },
    {
      name: "French Toast",
      image: "images/french-toast.jpeg",
      ingredients: [
        "2 eggs", "1/2 cup milk", "Bread slices", "Cinnamon", "Maple syrup"
      ],
      instructions: [
        "Beat eggs and milk together.",
        "Dip bread in mixture and fry until golden.",
        "Sprinkle cinnamon and pour syrup.",
        "Serve hot."
      ]
    }
  ],
  lunch: [
    {
      name: "Meatless Grain Bowl",
      image: "images/grain-bowl.jpg",
      ingredients: ["Quinoa", "Chickpeas", "Spinach", "Hummus", "Lemon dressing"],
      instructions: [
        "Cook quinoa and let it cool.",
        "Layer bowl with quinoa, chickpeas, and spinach.",
        "Top with hummus and drizzle dressing.",
        "Serve chilled."
      ]
    },
    {
      name: "Chicken Lettuce Wraps",
      image: "images/lettuce-wraps.jpeg",
      ingredients: ["Cooked chicken", "Lettuce leaves", "Soy sauce", "Garlic", "Ginger"],
      instructions: [
        "Stir-fry chicken with garlic, ginger, and soy sauce.",
        "Spoon into lettuce leaves.",
        "Roll and serve."
      ]
    },
    {
      name: "Sheet-Pan Crispy Ramen",
      image: "images/crispy-ramen.jpeg",
      ingredients: ["Ramen noodles", "Veggies", "Soy sauce", "Oil"],
      instructions: [
        "Cook noodles halfway.",
        "Spread on baking tray with veggies.",
        "Drizzle with oil and soy sauce.",
        "Bake until crispy."
      ]
    }
  ],
  dinner: [
    {
      name: "Biryani",
      image: "images/Biryani.jpeg",
      ingredients: ["Rice", "Chicken", "Spices", "Yogurt", "Onions"],
      instructions: [
        "Marinate chicken with spices and yogurt.",
        "Cook rice separately.",
        "Layer chicken and rice in pot and steam.",
        "Garnish with fried onions."
      ]
    },
    {
      name: "Buffalo Burger",
      image: "images/buffalo-burger.jpeg",
      ingredients: ["Burger buns", "Buffalo meat patty", "Lettuce", "Tomato", "Mayo"],
      instructions: [
        "Grill buffalo patty.",
        "Assemble burger with lettuce, tomato, and mayo.",
        "Serve hot with fries."
      ]
    },
    {
      name: "Barbecue Platter",
      image: "images/bbq.jpeg",
      ingredients: ["BBQ chicken", "Kebabs", "Mint chutney", "Naan"],
      instructions: [
        "Grill all meats.",
        "Serve with naan and chutney."
      ]
    }
  ],
  salads: [
    {
      name: "Caesar Salad",
      image: "images/caesar.jpeg",
      ingredients: ["Romaine lettuce", "Croutons", "Caesar dressing", "Parmesan"],
      instructions: [
        "Toss lettuce with dressing.",
        "Add croutons and parmesan.",
        "Serve chilled."
      ]
    },
    {
      name: "Garden Salad",
      image: "images/garden-salad.jpg",
      ingredients: ["Tomato", "Cucumber", "Lettuce", "Carrots", "Lemon juice"],
      instructions: [
        "Chop all vegetables.",
        "Toss with lemon juice.",
        "Serve fresh."
      ]
    },
    {
      name: "Pasta Salad",
      image: "images/pasta-salad.jpg",
      ingredients: ["Pasta", "Olives", "Feta", "Bell pepper", "Italian dressing"],
      instructions: [
        "Boil pasta and let cool.",
        "Mix all ingredients.",
        "Chill and serve."
      ]
    }
  ],
  drinks: [
    {
      name: "Mango Smoothie",
      image: "images/mango-smoothie.jpg",
      ingredients: ["Mango", "Milk", "Sugar", "Ice"],
      instructions: [
        "Blend all ingredients.",
        "Serve chilled."
      ]
    },
    {
      name: "Mint Margarita",
      image: "images/mint-margarita.jpg",
      ingredients: ["Mint", "Lemon juice", "Soda", "Ice"],
      instructions: [
        "Blend mint and lemon juice.",
        "Add soda and ice.",
        "Serve chilled."
      ]
    },
    {
      name: "Cold Coffee Cappuccino",
      image: "images/cappuccino.jpg",
      ingredients: ["Coffee", "Milk", "Sugar", "Ice"],
      instructions: [
        "Blend all ingredients.",
        "Top with foam.",
        "Serve cold."
      ]
    }
  ]
};

// Render recipes by category
function renderRecipes(category) {
  const container = $("#recipes-container");
  container.empty();

  recipes[category].forEach((recipe, index) => {
    const card = $(`
      <div class="recipe-card">
        <h3 class="recipe-title" data-index="${index}" data-category="${category}">${recipe.name}</h3>
        <div class="recipe-content" id="${category}-${index}">
          <img src="${recipe.image}" class="recipe-image" />
          <div class="recipe-section">
            <h4>Ingredients</h4>
            <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
          </div>
          <div class="recipe-section">
            <h4>Instructions</h4>
            <ol>${recipe.instructions.map(i => `<li>${i}</li>`).join("")}</ol>
          </div>
        </div>
      </div>
    `);
    container.append(card);
  });
}

// Click handlers
$(document).ready(() => {
  $(".category-btn").on("click", function () {
    const category = $(this).data("category");
    renderRecipes(category);
  });

  $(document).on("click", ".recipe-title", function () {
    const id = `${$(this).data("category")}-${$(this).data("index")}`;
    $(`#${id}`).slideToggle();
  });

  $("#searchBar").on("input", function () {
    const query = $(this).val().toLowerCase();
    $(".recipe-title").each(function () {
      const title = $(this).text().toLowerCase();
      $(this).closest(".recipe-card").toggle(title.includes(query));
    });
  });
});
