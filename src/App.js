import Simpson from "./components/Simpson";

function App() {
  return (
    <div className="App">
        <h1>react intro lesson</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex magnam quasi veniam. Accusamus accusantium ad, alias aliquam asperiores aspernatur atque beatae consectetur consequuntur, cupiditate dolore ea eaque earum enim eos est et ex illo illum in itaque iusto laudantium libero magnam maiores mollitia, natus nulla quasi quis quisquam rerum ullam?
      </p>


{/* eslint-disable-next-line react/jsx-no-undef */}
<Simpson name = {'bart'}
pic = {`https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Bart_Simpson_200px.png/170px-Bart_Simpson_200px.png`}
/>


{/* eslint-disable-next-line react/jsx-no-undef */}
<Simpson name = {'homer'}
pic = {`https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png`}
/>
        <Simpson name = {'Lisa'}
                 pic = {`https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png`}
                 />
    </div>
  );
}

export default App;
