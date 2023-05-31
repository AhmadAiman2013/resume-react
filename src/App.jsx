

// function Experience() {
//   return (
//     <>
//       <h3>Software student</h3>
//       <h4>Sigma Lab Sdn Bhd</h4>
//     </>
//   )
// }

// function App() {
  
//   return (
//     <div className='text-center py-5'>
//       <h1>Ahmad Aiman</h1>
//       <h2>Software student</h2>
//       <Experience />
//     </div>
//   )
// }

// export default App


function Experience() {
  return (
    <>
      <div className="accordion" id="experienceAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#experienceCollapse"
              aria-expanded="true"
              aria-controls="experienceCollapse"
            >
              <span className='text-primary'>Software Student</span>
            </button>
          </h2>
          <div
            id="experienceCollapse"
            className="accordion-collapse collapse show"
            aria-labelledby="experienceCollapse"
            data-bs-parent="#experienceAccordion"
          >
            <div className="accordion-body">
              <h4>Sigma Lab Sdn Bhd</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <div className='d-flex flex-column justify-content-centre align-items-center py-5'>
      <h1>Ahmad Aiman</h1>
      <h2>Software student</h2>
      <div className="accordion">
        <Experience />
      </div>
    </div>
  );
}

export default App;
