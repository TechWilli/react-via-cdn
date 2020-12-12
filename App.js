const App = () => {

  const [lastName, setLastName] = React.useState('Assis')

  const changeName = () => setLastName(prevName => prevName === 'Assis' ? 'Araujo' : 'Assis')

  return (
    <React.Fragment>
      <div className="container">
        <p>Hello React via CDN</p>
        <p>William {lastName}</p>
        <button
          type="button"
          onClick={changeName}
        >
          mudar sobrenome
      </button>
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))