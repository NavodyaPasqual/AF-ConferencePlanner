import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div className="p-3">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://agcdn-2mrybbgckm7omi0k.netdna-ssl.com/wp-content/uploads/2017/02/alphagamma-top-10-business-conferences-for-entrepreneurs-opportunities-1021x580.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://2.bp.blogspot.com/-f9c31V_64Jc/VvuybGDvowI/AAAAAAAAAU0/WktZWZGgz7AUoUcZdd10zi96-2jgoIrbQ/w1200-h630-p-k-no-nu/itworkshop.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://miro.medium.com/max/1000/0*QGRRJe68_5wKvN5H.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Home;