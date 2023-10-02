const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


// This function will filter the fruit list based on whatever user input is in the search box. If the string in the user input appears ANYWHERE in the fruit name, it should be added to results list. It also should not matter if a user types upper or lower case letters.

function search(str) {
	let results = []; // create empty array for results

	//filter and populate the results array. Foreach method iterates through each fruit. If the fruit is included, push the fruitName into the results array.
	fruit.forEach(fruitName => {
		if (fruitName.toLowerCase().includes(str.toLowerCase())) {
		  results.push(fruitName);
		}
	  });

	return results;
}
//this function is an event handler that is called whenever there is a keyup
function searchHandler(e) {
	const inputVal = e.target.value; // this line accesses the element that triggered the event and stores it in the input value

	//if the input value is empty, then hide the suggestions container otherwise proceed to search and showSuggestions
	if (inputVal === ''){
		suggestions.parentElement.style.display = 'none';
	} else {
		const results = search(inputVal); // this line calls the search function and passes the inputVal collected in the previous line into it in order to filter the fruit based on what the user input.

		showSuggestions(results, inputVal); // this line calls the showSuggestions function passing in the results, and inputVal as arguments. this should trigger the dropdown suggestions
}
	}


function showSuggestions(results, inputVal) {
		suggestions.innerHTML = ''; // Clear existing suggestions. start with an empty dropdown before adding suggestions

		//forEach iterates through the results array from the search function. for each suggestion a new li is created and populated with a single result. Each subsequent suggestion is appended as a child to the 
		results.forEach(result => {
		  const li = document.createElement('li');
		  li.textContent = result;
		  suggestions.appendChild(li);
		});
	  
		//after adding all the suggestions to the li dropdown, we need to display the drowpdown box if it is applicable. If the results length is 0 no dropdown will display.
		suggestions.parentElement.style.display = results.length > 0 ? 'block' : 'none';
	  }
	  

// this function handles the user interacting with the dropdown menu of suggestions
function useSuggestion(e) {
	// if the element that was clicked is an li then it populates the text in the input field to the sugestion that was clicked. after the user selects from the dropdown, it is hidden.
	if (e.target.tagName === 'LI') {
		input.value = e.target.textContent;
		suggestions.parentElement.style.display = 'none';
	  }
}

input.addEventListener('keyup', searchHandler);

suggestions.addEventListener('click', useSuggestion);
