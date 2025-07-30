import React, { useEffect } from "react";
import Slider from "react-slick";
import { useIntrepid } from "../contexts/IntrepidContext";
import "../styles/BannerLog.css";

export default function BannerLog() {
    const { bannerEvents } = useIntrepid();

    useEffect(() => {
        if (!bannerEvents || bannerEvents.length === 0) {
            const evento = new CustomEvent("intrepid:load-banner-events");
            window.dispatchEvent(evento);
        }
    }, [bannerEvents]);

    if (!bannerEvents || bannerEvents.length === 0) return null;

    const sliderSettings = {
        dots: true,
        infinite: true,
        autoplay: bannerEvents.length > 1,
        autoplaySpeed: 5000,
        arrows: false,
        pauseOnHover: true,
        swipe: true
    };

    return (
        <div className="banner-log-container">
                 {" "}
            <Slider {...sliderSettings}>
                      {/* Vamos colocar as imagens diretamente no frontend na
                      pasta assets e de acordo com o tipo do objeto nos
                      vamos rendenizar-la */}
                {bannerEvents.map(banner => (
                    <div
                        key={banner.id}
                        className="banner-log"
                        style={{
                            backgroundImage: banner.backgroundImage
                                ? `url(/${banner.backgroundImage})`
                                : "none",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >
                                   {" "}
                        <div className="banner-title">{banner.title}</div>
                                    <br />           {" "}
                        <div className="log-marquee">
                                         {" "}
                            <div className="log-track">
                                               {" "}
                                <span className="log-item">
                                                     {" "}
                                    <span className="log-type">
                                                            [
                                        {banner.type.toUpperCase()}]            
                                             {" "}
                                    </span>{" "}
                                                     {" "}
                                    {banner.link ? (
                                        <a
                                            href={banner.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                                                 {" "}
                                            {banner.message}                   {" "}
                                        </a>
                                    ) : (
                                        banner.message
                                    )}
                                                   {" "}
                                </span>
                                             {" "}
                            </div>
                                       {" "}
                        </div>
                                 {" "}
                    </div>
                ))}
                     {" "}
            </Slider>
               {" "}
        </div>
    );
}
