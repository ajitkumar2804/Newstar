import '../styles/footer.css'

export default function Footer() {
    return (
        <div>
        <div className='foot'>
        <footer className="footer text-white text-center">
            <div className="py-3 my-4">
                <ul className="list-inline">
                    <li className="list-inline-item">Home</li>
                    <li className="list-inline-item">Services</li>
                    <li className="list-inline-item">About</li>
                    <li className="list-inline-item">FAQs</li>
                    <li className="list-inline-item">Privacy Policy</li>
                </ul>
                <p className="text-centre text-muted">@ 2022 Newstar ,Inc</p>
            </div>
        </footer>
        </div >
        </div>
    )
}