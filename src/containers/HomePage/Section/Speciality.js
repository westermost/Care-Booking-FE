import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Speciality.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

import specialityImg from '../../../assets/images/speciality/co-xuong-khop.jpg';

class Speciality extends Component {
    render() {
        return (
            <div className='section-share section-speciality'>
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
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <img
                                    src={specialityImg}
                                    alt=''
                                />
                                <div>Cơ xương khớp 1</div>
                            </div>
                            <div className='section-customize'>
                                <img
                                    src={specialityImg}
                                    alt=''
                                />
                                <div>Cơ xương khớp 2</div>
                            </div>
                            <div className='section-customize'>
                                <img
                                    src={specialityImg}
                                    alt=''
                                />
                                <div>Cơ xương khớp 3</div>
                            </div>
                            <div className='section-customize'>
                                <img
                                    src={specialityImg}
                                    alt=''
                                />
                                <div>Cơ xương khớp 4</div>
                            </div>
                            <div className='section-customize'>
                                <img
                                    src={specialityImg}
                                    alt=''
                                />
                                <div>Cơ xương khớp 5</div>
                            </div>
                            <div className='section-customize'>
                                <img
                                    src={specialityImg}
                                    alt=''
                                />
                                <div>Cơ xương khớp 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Speciality);

