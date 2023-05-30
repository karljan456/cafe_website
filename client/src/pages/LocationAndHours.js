
export default function LocationAndHours() {

    return (
        <div className="wrapper">
            <h1 className="title">Location</h1>
            <div className='info d-flex align-items-center'>
                <div className='col-md-8'>
                    <img className='cafe_photo' src={require('../assets/cafe_photo.jpg')} alt='cafe' class="img-fluid mb-3 mb-md-0 mx-auto d-block" />
                </div>
                <div className='col-md-4'>
                    <h2>DOWNTOWN</h2>
                    <p>Street: Pohjolankatu 12, Tampere</p>
                    <h3>Hours</h3>
                    <p>Monday to Friday: 7:00 AM - 7:00 PM</p>
                    <p>Saturday and Sunday: 8:00 AM - 3:00 PM</p>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18246.539582739297!2d23.724395147664392!3d61.4941771169008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfi!2sfi!4v1685409925007!5m2!1sfi!2sfi"
                width="600" height="400"
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>)

}