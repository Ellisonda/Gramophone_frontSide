


const ErrorComponent = (props) => {
    const {children} = props
  return (
    <div style={{color:'white', backgroundColor:'GrayText', border:1}}>{children}</div>
  )
}

export default ErrorComponent