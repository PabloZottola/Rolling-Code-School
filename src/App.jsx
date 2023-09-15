import "./style/App.css";

function App() {

  myInput.addEventListener('input', function() {
    if (this.value.trim() !== '') {
        this.classList.add('active');
    } else {
        this.classList.remove('active');
    }
  });

  return <>
  <main>
    <section className="register">
    <img src="" alt="" />
      <form>
        <input type="text" />
        <label htmlFor="">E-Mail</label>
        <div>
          <div>
            <input type="text" />
            <label id="myInput" htmlFor="">Nombre</label>
            <input type="text" />
            <label htmlFor="">Telefono</label>
            <input type="text" />
            <label htmlFor="">Confirmar contraseña</label>  
          </div>
          <div>
            <input type="text" />
            <label htmlFor="">Apellido</label>
            <input type="text" />
            <label htmlFor="">Fecha de nacimiento</label>
            <input type="text" />
            <label htmlFor="">Contraseña</label>
          </div>
        </div>
      </form>
    </section>
  </main>
  </>;
}

export default App;
