import React from 'react'

const Services = () => {
    return (
        <>
            <section id="services">
                <div class="container text-center">
                    <h1 class="title">WHAT WE DO ?</h1>
                    <div class="row text-center">
                        <div class="col-md-4 services">
                            <img src="https://i.postimg.cc/T2ZvTQkd/service1.png" class="services-img" alt="" />
                            <h4>Growth Marketing</h4>
                            <p>Growth marketers test and tweak, running iterative tests on every aspect of the marketing team’s output, from content creation through to media buying. They collect data from these tests to adjust strategy decisions that lift key performance metrics. </p>
                        </div>
                        <div class="col-md-4 services">
                            <img src="https://i.postimg.cc/BbFy89hq/service2.png" class="services-img" alt="" />
                            <h4>Online Branding</h4>
                            <p> Branding is a key component of digital marketing. It can be used to increase awareness of a product or service, reach new markets, build customer loyalty, improve reputation, and reduce marketing costs.</p>
                        </div>
                        <div class="col-md-4 services">
                            <img src="https://i.postimg.cc/T30s5ccW/service3.png" class="services-img" alt="" />
                            <h4>Animated Ads</h4>
                            <p>This type of advertisement is frequently displayed through television or digital channels, especially through social platforms like YouTube and Facebook. In the first case, the ad consists of a banner with an embedded video, whereas the latter term refers to an ad that’s played inside an organic video post.</p>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary">All Services</button>
                </div>
            </section>
        </>
    )
}

export default Services