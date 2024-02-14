import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './OutStandingDoctor.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

import medicalImg from '../../../assets/images/doctor/gs-ha-van-quyet.jpg';

class OutStandingDoctor extends Component {
    render() {
        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='section-title'>
                            <FormattedMessage id='section-outstanding-doctor.popular-medical' />
                        </span>
                        <button className='btn btn-section-more'>
                            <FormattedMessage id='section-outstanding-doctor.see-more' />
                        </button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='doctor-border'>
                                    <div className='doctor-outer'>
                                        <img className='doctor-img'
                                            src={medicalImg}
                                            alt=''
                                        />
                                    </div>
                                    <div className='doctor-position'> 
                                        <div>Giáo sư tiến sĩ XYZ</div>
                                        <div>Da Liễu</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='doctor-border'>
                                    <div className='doctor-outer'>
                                        <img className='doctor-img'
                                            src={medicalImg}
                                            alt=''
                                        />
                                    </div>
                                    <div className='doctor-position'> 
                                        <div>Giáo sư tiến sĩ XYZ</div>
                                        <div>Da Liễu</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='doctor-border'>
                                    <div className='doctor-outer'>
                                        <img className='doctor-img'
                                            src={medicalImg}
                                            alt=''
                                        />
                                    </div>
                                    <div className='doctor-position'> 
                                        <div>Giáo sư tiến sĩ XYZ</div>
                                        <div>Da Liễu</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='doctor-border'>
                                    <div className='doctor-outer'>
                                        <img className='doctor-img'
                                            src={medicalImg}
                                            alt=''
                                        />
                                    </div>
                                    <div className='doctor-position'> 
                                        <div>Giáo sư tiến sĩ XYZ</div>
                                        <div>Da Liễu</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='doctor-border'>
                                    <div className='doctor-outer'>
                                        <img className='doctor-img'
                                            src={medicalImg}
                                            alt=''
                                        />
                                    </div>
                                    <div className='doctor-position'> 
                                        <div>Giáo sư tiến sĩ XYZ</div>
                                        <div>Da Liễu</div>
                                    </div>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);

