const Button = (props) => {
  const { countryShow, setShow, name } = props

  const onChange = () => {
    let changeShow = { ...countryShow }
    changeShow[name] = !countryShow[name]
    setShow(changeShow)
  }

  return (
    <button onClick={onChange}>
      {
        !countryShow[name] &&
        "Show"
      }
      {
        countryShow[name] &&
        "Don't Show"
      }
    </button>
  )
}

export { Button }
