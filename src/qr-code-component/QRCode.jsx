import './QRCode.css'
import qrImage from './assets/image-qr-code.png'
import qrLogo from './assets/favicon-32x32.png'


function QRCode() {
    return(
        <div className="page-wrapper">
            <div className="qr-container">
                <img src={qrImage} alt="QR code" className='qr-image' />
                <div className="qr-content">
                    <h1 className='qr-title'>
                        Improve your front-end skills by building projects
                    </h1>
                    <p className="qr-description">
                        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default QRCode;
