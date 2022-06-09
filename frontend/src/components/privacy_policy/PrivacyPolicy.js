
import "./App.css";

function App() {
  return (
    /*        <div class="box">
                <div class="title">
                <h1>About amorr</h1>
                <body> Lorem Ipsum</body>
                </div>
           <div className = 'image' >
               <img className='img1' src={peacock}></img>
            </div>
            </div>*/

    <div className="container">
      <div>
        <div class="box">
          <div className="titleContainer">
            <h1 class="title">
              <span class="a">a</span>
              <span class="morr">morr</span>
              <span> </span>
              <span class="ToS">Terms of Service</span>
            </h1>
          </div>
          <p class="p1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ullamcorper ipsum erat, nec bibendum turpis venenatis eget. Maecenas
            et rutrum arcu. Cras vehicula mollis lobortis. Curabitur quis velit
            id augue porta venenatis. Quisque interdum, tellus eu cursus
            ultricies, sem enim sagittis sapien, mattis commodo arcu nulla at
            arcu. Ut sit amet rutrum dolor. Nulla tristique enim libero. Aliquam
            erat volutpat.
          </p>
          <p class="p2">
            Maecenas luctus ultricies nibh eget ultrices. Fusce porttitor
            fringilla pharetra. Donec et maximus felis. Quisque interdum eros
            vitae magna aliquam blandit. Nunc eget urna eu neque lacinia
            pulvinar. Aliquam erat volutpat. Vestibulum non rutrum quam, sed
            commodo sapien. Donec quam nisi, convallis et faucibus at, dignissim
            sit amet lectus. Nulla posuere tristique purus id fermentum.
            Maecenas vitae ligula sit amet nisl fringilla aliquet.
          </p>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;