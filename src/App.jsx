import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">

      <form className="w-50 mx-auto p-4 border rounded shadow bg-light">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" name="password" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>

          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" id="male" />
            <label className="form-check-label" htmlFor="male">Male</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" id="female" />
            <label className="form-check-label" htmlFor="female">Female</label>
          </div>

        </div>
        
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary w-50">Sign up</button>
        </div>


      </form>
    </div>
  );
}

export default App;
