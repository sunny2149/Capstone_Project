import React from "react";
import blogcard5 from "../images/blog6.png";
import MainHeader from "./MainHeader";
import Footer from "./Footer";

export default function Blogs() {
  return (
    <div>
      <MainHeader />
      <div className="blog-container-blog">
        <h2 className="text-center">''News & Insights''</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 py-5 d-flex align-items-center justify-content-center">
              <div
                className="card h-100 card-with-shadow"
                style={{ width: "20rem" }}
              >
                <img
                  src={
                    "https://i.guim.co.uk/img/media/50407bad9513c7f2c1a0846ab2858617f08592da/0_374_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1dfa0f87fcbb84adbadde5d748c438c3"
                  }
                  className="card-img-top"
                  alt="Blog1"
                />
                <div className="card-body">
                  <h5 className="card-title">Coming to terms with anxiety</h5>
                  <p className="card-text">
                    Tom Higgins, a Project Manager in our People and
                    Transformation function, was diagnosed with anxiety and
                    stress in 2020. It was a moment that marked the end of one
                    painful journey, and the start of another as he set about
                    rediscovering who he was.
                  </p>
                  <a href="#" className="btn custom-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 py-5 d-flex align-items-center justify-content-center">
              <div
                className="card h-100 card-with-shadow"
                style={{ width: "20rem" }}
              >
                <img
                  src={
                    "https://jobs.natwestgroup.com/system/production/assets/247739/original/AO331_Hero_Makaton_INTERNAL.jpg"
                  }
                  className="card-img-top"
                  alt="Blog2"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Strengthening diversity with the help of Enable Disability
                  </h5>
                  <p className="card-text">
                    The main objective of National Inclusion Week is to shine a
                    spotlight on diversity and inclusion within the workplace.
                    According to the Office for National Statistics, about one
                    in ten people will have a disability during their lifetime.
                  </p>
                  <a href="#" className="btn custom-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 py-5 d-flex align-items-center justify-content-center">
              <div
                className="card h-100 card-with-shadow"
                style={{ width: "20rem" }}
              >
                <img
                  src={
                    "https://static.independent.co.uk/2023/02/17/08/f57ae6a21fc6477bd8d0214670b6d888Y29udGVudHNlYXJjaGFwaSwxNjc2NzA2OTky-2.69490652.jpg?width=1200&height=900&fit=crop"
                  }
                  className="card-img-top"
                  alt="Blog3"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Putting disability at the heart of what we do
                  </h5>
                  <p className="card-text">
                    ‘It’s important that we create experiences that work for our
                    customers and consider what they need to make their banking
                    experience as easy as possible. For example, we’re giving
                    customers more control over how they interact with our
                    chatbot, Cora.
                  </p>
                  <a href="#" className="btn custom-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 py-5 d-flex align-items-center justify-content-center">
              <div
                className="card h-100 card-with-shadow"
                style={{ width: "20rem" }}
              >
                <img
                  src={"https://pbs.twimg.com/media/EvE4r5zXYAAkmKD.jpg:large"}
                  className="card-img-top"
                  alt="Blog4"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Our customers trust we’re doing everything we can to keep
                    them secure
                  </h5>
                  <p className="card-text">
                    Just before Dave started his new data privacy role, thieves
                    stole his identity and applied for three credit cards in his
                    name. ‘It taught me what needs to be done to safeguard
                    customers – and also how not to do it’ says Dave.
                  </p>
                  <a href="#" className="btn custom-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 py-5 d-flex align-items-center justify-content-center">
              <div
                className="card h-100 card-with-shadow"
                style={{ width: "20rem" }}
              >
                <img src={blogcard5} className="card-img-top" alt="Blog5" />
                <div className="card-body">
                  <h5 className="card-title">
                    7 reasons you should join one of our Graduate and Internship
                    programmes
                  </h5>
                  <p className="card-text">
                    Have you ever arrived somewhere that people are working, and
                    immediately felt right at home? We want every colleague to
                    feel just like that. We are firm believers that creating a
                    fantastic working environment is the key to unlocking
                    amazing work.
                  </p>
                  <a href="#" className="btn custom-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 py-5 d-flex align-items-center justify-content-center">
              <div
                className="card h-100 card-with-shadow"
                style={{ width: "20rem" }}
              >
                <img
                  src={
                    "https://jobs.natwestgroup.com/system/production/assets/387774/original/NWG_H_AO1038_internal.jpg"
                  }
                  className="card-img-top"
                  alt="Blog6"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    It made me realise I can be whatever I want to be
                  </h5>
                  <p className="card-text">
                    The first time I took part was during the pandemic and,
                    being so grateful that everything was OK for my family and
                    I, I wanted to give something back given the difficulties so
                    many people were facing at that time.’
                  </p>
                  <a href="#" className="btn custom-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
