// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

async function fetchAnswer() {
     try{
        const response = await fetch('https://yesno.wtf/api');

        const data = await response.json();

        const answerDiv = document.getElementById('anser');

        const answerImage = document.getElementById ('answer Image');

        setTimeout((500))

     }catch{
      console.error('Error fetching answer:', error);
     }
    
}


