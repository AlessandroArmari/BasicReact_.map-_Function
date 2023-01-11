//CREATING A simple  list nested  in another list
/*
function App() {
  return (
    <>
      <ol>
        <li>
          Igiene e pulizia
          <ul>
            <li>Detergente pavimento</li>
            <li>Sapone per i piatti</li>
          </ul>
        </li>
        <li>
          Alimentari
          <ul>
            <li>Carne</li>
            <li>Pasta</li>
          </ul>
        </li>
      </ol>
    </>
  );
}

export default App;
*/

function App() {
  const searchEngines = ["Google", "Yahoo", "DuckDuckGo"];
  //usign {} inside thr "return()"" allows us to use JS variables ecc...
  // .map()--->takes 2 parameters (first: element, second: index, third: is an array(pretty useless))
  // .map()--->flows through the array for each element and applies the function in the ()
  return (
    <>
      <ul>
        {searchEngines.map((element, index) => {
          return (
            <li key={index}>
              <a href={"https://www." + element + ".com"} target="_blank">
                {element + " " + index}
              </a>
            </li>
          );
        })}
      </ul>
    </>
    //REMEMBER: {} let you in in js world and allows you to use
    //variable for their content, not as mere HTML strings...
    //Writing a variable without {} would only print the name of the variable
    //on HTML page, not the actual content
  );
}

// MIND: if you don't assign "key" this WARNING will be displayed
// on Browser Console: "Warning: Each child in a list should have a unique "key" prop.

export default App;
