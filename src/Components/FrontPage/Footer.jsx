const Footer = (props) => {

    const itemStyle = {
        paddingLeft: "10px"
    }

    const itemStyle2 = {
        paddingRight: "10px"
    }
    return (
        <div className="container-fliud" id="footer">
            <div className="row ps-5">
                <div className="col ps-5 fs-4 mt-5">
                    <div className="row my-2 footer-item fw-bold fs-2" style={itemStyle}>A clean car is a happy car</div>
                    <div className="row my-2 footer-item" style={itemStyle}>About us</div>
                    <div className="row my-2 footer-item" style={itemStyle}>Contact us</div>
                    <div className="row my-2 footer-item" style={itemStyle}>Privacy Policy</div>
                    <div className="row my-2 footer-item" style={itemStyle}>Terms and conditions</div>
                </div>
                {/* <div className="col">
                    <div className="col foot mt-5" style={{ backgroundImage: `url(./footer-picture.jpg)` , backgroundSize:'50%' ,itemStyle2 }}></div>
                </div> */}
            </div>
        </div>
    );
};
export default Footer;