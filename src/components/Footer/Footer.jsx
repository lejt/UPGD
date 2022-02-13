import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p><span>UPGD</span> by <a href="https://github.com/lejt" target="_blank">Jacky Tam</a></p>

                <div className="columns">
                    <div className="column">
                        <div className="col_content">
                            <h4>About US</h4>
                            <ul>
                                <li>Aim</li>
                                <li>Vision</li>
                                <li>Testimonials</li>
                            </ul>
                        </div>
                    </div>
                    <div className="column">
                        <div className="col_content">
                            <h4>UPGD Inc.</h4>
                            <ul>
                                <li>123 Canuck Way</li>
                                <li>BC, Canada</li>
                                <li>(123)-234-3456</li>
                            </ul>
                        </div>
                    </div>
                    <div className="column">
                    <div className="col_content">
                        <h4>Social Media</h4>
                            <ul>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    &copy;2022 UPGD Inc. | All rights reserved | Terms of Service | Privacy
                </div>
            </div>
        </footer>
    )
}