const Advertisement = (props) => {
    return (
        <div className="container my-5 py-5 bg-transparent rounded-5">

            <div className="row">

                <div className="col">
                <div className="card-body w-75 ps-5 ms-5">
                        <h1 className="card-title" style={{color: 'rgba(234, 8, 177, 0.973'}}  >
                            Cleaning the environment, one car at a time
                        </h1>
                        <p className="card-text fs-5 mt-4" style={{color: 'rgba(234, 8, 177, 0.973'}}  >
                            We provide both remote and on-site Car wash
                            services. Our list of available Wash Packs is
                            designed to suit your needs in all kinds of
                            situations.
                        </p>
                    </div>
                </div>

                <div className="col advert rounded-2 ps-5 mx-5" style={{ backgroundImage: `url(./purplehome.jpg)` , backgroundSize:'100%'}}></div>

            </div>

            <div className="row my-3"></div>

            <div className="row">

                <div className="col-5 ms-5 advert rounded-2 " style={{ backgroundImage: `url(./carwash-5.png)` , backgroundSize:'100%' }} ></div>

                <div className="col ms-5">
                <div className="card-body w-75 mt-5">
                        <h1 className="card-title" style={{color: 'rgba(234, 8, 177, 0.973'}}>
                            Wherever you want, whenever you want
                        </h1>
                        <p className="card-text fs-5 mt-4" style={{color: 'rgba(234, 8, 177, 0.973'}}>
                            Contacting us has never been easier. The mobile app provides a more quick and reliant way of booking your car wash ahead of time.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Advertisement;