import {useState} from "react"

function App() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionClick = (index) => {
    if (index !== openAccordion) {
        setOpenAccordion(index);
     } else {
       setOpenAccordion(null);
    }
  };
  return (
    <div className="App">
      

      <div className="accordion__container">
        <h1>Frequently Asked questions About The Company </h1>
        <div
        // HERE
          className={`accordion__item  ${openAccordion === 0 ? "open" : ""}`}
        >
          <div
            className="accordion__header"
            onClick={() => handleAccordionClick(0)}
          >
            <p className="accordion__number">01</p>
            <p className="accordion__name">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, amet.</p>
          </div>
          

          <div className="accordion__details">
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, ipsa iure. Labore eveniet nostrum ipsum similique cumque possimus, quis nemo?

              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident eligendi totam voluptates illum expedita repudiandae ratione atque placeat inventore in!
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quisquam reiciendis vel, nostrum atque temporibus repellat voluptatem voluptate sunt vitae!
              </li>
            </ul>
          </div>
        </div>

        <div
        // HERE
          className={`accordion__item  ${openAccordion === 1 ? "open" : ""}`}
        >
          <div
            className="accordion__header"
            onClick={() => handleAccordionClick(1)}
          >
            <p className="accordion__number">02</p>
            <p className="accordion__name">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, animi.
            
            </p>
          
          </div>
          <div className="accordion__details">
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ullam!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quam!
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, voluptatem? 
              </li>
            </ul>
          </div>
        </div>
        <div
        // HERE
          className={`accordion__item  ${openAccordion === 2 ? "open" : ""}`}
        >
          <div
            className="accordion__header"
            onClick={() => handleAccordionClick(2)}
          >
            <p className="accordion__number">03</p>
            <p className="accordion__name">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="accordion__details">
            <ul>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, impedit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, excepturi?
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, corporis.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  );

}

export default App

