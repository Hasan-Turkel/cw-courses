import Card from "./Card"


const Lesson = () => {
  return (
    <main className="bg-danger-subtle">
        <h1 className="text-center m-4" >Lesson Reminder</h1>
        <section className="row justify-content-around">
            <Card
            name= 'HTML'
            hour= "10:00 am"
            logo=
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU" />

            <Card
            name= 'CSS'
            hour= " 11:15 am"
            logo=
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'/>

            <Card
            name= 'JAVASCRIPT'
            hour= " 13:00 am"
            logo=
            'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'/>


            <Card 
            name= 'REACT'
            hour= "14:15 pm"
            logo=
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'/>

            <Card 
            name= 'BOOTSTRAP'
            hour= "16:15 pm"
            logo=
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png' />

            <Card
            name= 'MUI'
            hour= "16:15 pm"
            logo=
            'https://mui.com/static/logo.png'/>
           
        </section>

    </main>
  )
}

export default Lesson