import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button, Container, Row } from "reactstrap";
import axios from "axios";

function SlideImg() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const GetData = async () => {
            const result = await axios('http://localhost:3001/postagem');
            setData(result.data);
        };

        GetData();

    }, []);
    const ultimo = data.length;
    const antepenltimo = data.length - 6;

    const attPage = (e) => {
        window.location.reload();
    }

    return (
        <div style={{ width: '100%' }}>
            <Carousel infiniteLoop='true' showThumbs={false} interval='3000' width='100%' autoPlay='true' showArrows={false} dynamicHeight='true'>
                
                        <div>
                            <img src="assets/banner.png" />
                            <p>a</p>
                        </div>
                        <div>
                            <img src="assets/img2.png" />
                            <p>a</p>
                        </div>
                        <div>
                            <img src="assets/img3.png" />
                            <p>a</p>
                        </div>
                        <div>
                            <img src="assets/img4.png" />
                            <p>a</p>
                        </div>
                        <div>
                            <img src="assets/img5.png" />
                            <p>a</p>
                        </div>
                    
            </Carousel>
        </div>
    )
}
export default SlideImg;