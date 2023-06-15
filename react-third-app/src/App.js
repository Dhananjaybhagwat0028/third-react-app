// User Defined Tag: <App />
function App() {
  return (
    <>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </>
  );
}

// User Defined Tag: <AppHeader />
function AppHeader() {
  return (
    <div className="row bg-success text-light p-3 fs-1">
      <div className="col">Home</div>
      <div className="col">Project</div>
      <div className="col">AboutUs</div>
    </div>
  );
}

// User Defined Tag: <AppBody />
function AppBody() {
  return (
    <>
      <div className="alert alert-success fs-3 mb-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        rem corrupti ipsam, necessitatibus, ut tempore nisi aspernatur cumque
        blanditiis quae quia. Corrupti, in ducimus. Ullam suscipit inventore
        quam ex non. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatibus tempora eum cupiditate. Nobis id, facere iure debitis eum a
        at, nulla placeat, tenetur tempore ratione adipisci deleniti alias
        aspernatur voluptatem! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis rem corrupti ipsam, necessitatibus, ut
        tempore nisi aspernatur cumque blanditiis quae quia. Corrupti, in
        ducimus. Ullam suscipit inventore quam ex non. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Voluptatibus tempora eum cupiditate.
        Nobis id, facere iure debitis eum a at, nulla placeat, tenetur 
      </div>
    </>
  );
}

// User Defined Tag: <AppFooter />
function AppFooter() {
  return (
    <>
      <div
        className="bg-dark text-light fs-1 d-flex justify-content-center align-items-center"
        style={{ height: "200px" }}>
        Lorem ipsum dolor sit amet.
      </div>
    </>
  );
}

export default App;
