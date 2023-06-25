

const Card = ({logo, name, hour }) => {
  return (
    <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center align-items-center gap-2 m-2"  >
        <img style={{width:"150px", height:"150px"}} src={logo} alt="" />
        <div>
            <p>Lesson Name : {name}</p>
            <p>Lesson Hour : {hour}</p>
        </div>
    </div>
  )
}

export default Card