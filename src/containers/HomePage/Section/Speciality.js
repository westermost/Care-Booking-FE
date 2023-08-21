import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Speciality.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import specialityImg from '../../../assets/images/speciality/co-xuong-khop.jpg';

class Speciality extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
        };

        return (
            <div className='section-speciality'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='section-title'>
                            <FormattedMessage id='section-speciality.popular-specialties' />
                        </span>
                        <button className='btn btn-section-more'>
                            <FormattedMessage id='section-speciality.see-more' />
                        </button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='img-customize'>
                                <img
                                    src={specialityImg}
                                    alt=''
                                />
                                <div>1</div>
                            </div>
                            <div className='img-customize'>
                                <img
                                    src={specialityImg}
                                    alt=''
                                />
                                <div>2</div>
                            </div>
                            <div className='img-customize'>
                                <img
                                    src={specialityImg}
                                    alt=''
                                />
                                <div>3</div>
                            </div>
                            <div className='img-customize'>
                                <img
                                    src={specialityImg}
                                    alt=''
                                />
                                <div>4</div>
                            </div>
                            <div className='img-customize'>
                                <img
                                    src={specialityImg}
                                    alt=''
                                />
                                <div>5</div>
                            </div>
                            <div className='img-customize'>
                                <img
                                    src={specialityImg}
                                    alt=''
                                />
                                <div>6</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

// Call fired action of Redux
const mapDispatchToProps = (dispatch) => {
    return {};
};

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div className={className}
//                 style={{...style, display: 'block', background: 'red'}}
//                 onClick={onClick}>
//             <i className="fa fa-angle-right" aria-hidden="true"></i>
//         </div>
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div className={className}
//                 style={{...style, display: 'block', background: 'red'}}
//                 onClick={onClick}>
//             <i className="fa fa-angle-left" aria-hidden="true"></i>
//         </div>
//     );
// }

export default connect(mapStateToProps, mapDispatchToProps)(Speciality);
