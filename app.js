import 'bootstrap/dist/css/bootstrap.css';
// import MyComponent from './MyComponent';
import Main from './src/main';
import TriviaCategories from './src/TriviaCategories';
function App() {
  return (
    <div>

      <h1>Welcome to My React App!</h1>
      {/* <MyComponent /> */}
     <Main />
    <TriviaCategories /> 
    </div>
  );
}

export default App;