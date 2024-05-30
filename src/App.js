
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import './style.css'



function App() {

  const [data, setData] = useState(
    [
    ]
  );

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();


  const handleSubmite = (e) => {
    e.preventDefault();

    setData([...data, {
      name: name,
      email: email,
      age: age
    }]);

    setName('');
    setEmail("")
    setAge("")
  }

  return (
    <>
      <section>
        <div className='container'>
          <div className='top-padding-100 buttom-padding-100'>
            <h3 className='text-center'>Form Data Assignment</h3>
            <div className='from-data row'>
              <div className='col-lg-4 col-md-6 col-sm-12 m-auto p-1  my-2 card '>
                <h4 className='text-center'>From Data</h4>
                <form className='p-3' onSubmit={handleSubmite}>
                  <div class="mb-3">
                    <label for="forName" class="form-label">Your Full Name</label>
                    <input type="text" class="form-control" id="forName" placeholder="ex..Jon Doe" value={name} onChange={e => setName(e.target.value)} />
                  </div>
                  <div class="mb-3">
                    <label for="forEmail" class="form-label">Your Email address</label>
                    <input type="email" class="form-control" id="forEmail" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                  </div>
                  <div class="mb-3">
                    <label for="forAge" class="form-label">Your Age</label>
                    <input type="number" class="form-control" id="forAge" placeholder="ex..25" value={age} onChange={e => setAge(e.target.value)} />
                  </div>

                  <div className='mb-3'>
                    <button type='submit' className='btn btn-primary'>Add</button>
                  </div>
                </form>
              </div>
            </div>
            {data.length != 0 ? (<>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.age}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>

            </>) : (<>
              <p className='text-center'>Add Data To Display</p>
            </>)}
          </div>
        </div>
      </section>

    </>
  );
}

export default App;
