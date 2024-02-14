import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Speciality.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

import medicalImg from '../../../assets/images/medical/viet-duc.jpg';

class MedicalFacility extends Component {
    render() {
        return (
            <div className='section-share section-medical-facility'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='section-title'>
                            <FormattedMessage id='section-medical-facility.popular-medical' />
                        </span>
                        <button className='btn btn-section-more'>
                            <FormattedMessage id='section-medical-facility.see-more' />
                        </button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <img
                                    src={medicalImg}
                                    alt=''
                                />
                                <div>Hệ thống 1</div>
                            </div>
                            <div className='section-customize'>
                                <img
                                    src={medicalImg}
                                    alt=''
                                />
                                <div>Hệ thống 2</div>
                            </div>
                            <div className='section-customize'>
                                <img
                                    src={medicalImg}
                                    alt=''
                                />
                                <div>Hệ thống 3</div>
                            </div>
                            <div className='section-customize'>
                                <img
                                    src={medicalImg}
                                    alt=''
                                />
                                <div>Hệ thống 4</div>
                            </div>
                            <div className='section-customize'>
                                <img
                                    src={medicalImg}
                                    alt=''
                                />
                                <div>Hệ thống 5</div>
                            </div>
                            <div className='section-customize'>
                                <img
                                    src={medicalImg}
                                    alt=''
                                />
                                <div>Hệ thống 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);

