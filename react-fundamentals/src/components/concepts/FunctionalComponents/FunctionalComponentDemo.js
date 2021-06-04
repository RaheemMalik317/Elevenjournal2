// Component names must be in CAPS, and they generally are PASCAL cased. Pascal casing ex: NewObject and Camel Casing ex: newObject; This means that all separate words have capital letters.

const FuncationalComponentDemo = () => {

  return (
    <div className="main">
      <div className="mainDiv">Hello React</div>
      <h1>Functional Components</h1>
      <p>Functional Coponents are the primary tool used in React to a buld a small, modular piece of your Application.</p>
      <dl>
          <dt>Can access state</dt>
          <dd>By passing props, Functional Componetns are capable of both rendering state variables fro display, as well as updating the value of state variable(s). We'll take a deeper dive into state and props later on - so don't fret if that doesn't make sense right now.</dd>
          <dt>No <i>this</i> keyword</dt>
          <dd>Class Components (or stateful components) in React will always require the use of the <i>this</i> keyword when initializing an object using the constructor method. Functional Components (or display components), however, are instanceless - meaning they have no access to the <i>this</i> keyword</dd>
          <dt><i>return()</i></dt>
          <dd>Functional Components (as well as Class Components) must return a single element - but the single element returned from the function may have children elements nested inside of it.</dd>
      </dl>
      <div>
          How are you today?
      </div>
    </div>
  );
};

export default FuncationalComponentDemo;