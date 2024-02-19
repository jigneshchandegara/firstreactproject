import React from 'react'

const Footer = () => {
    return (
        <>
            <section id="footer">
                <div class="container">
                    <div class="row flex-wrap justify-content-between ">
                        <div class="col-md-4 footer-box">
                            <p><b>CONTACT US</b></p>
                            <p> address :- World Trade Center,Banglore</p>
                            <p>mobile :- 9876543456</p>
                            <p>Email :- xyz@gmail.com</p>
                        </div>
                        <div class="col-md-4 footer-box">
                            <p><b>SUBSCRIBE NEWSLETTER</b></p>
                            <input type="email" class="form-control" placeholder="Your Email" />
                            <button type="button" class="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Footer