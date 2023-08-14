import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        // fire redux event : actions
        this.props.changeLanguageAppRedux(language);
    };


    render() {
        console.log('PROPS: ', this.props);
        let language = this.props.language
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className='fas fa-bars'></i>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div>
                                    <b>
                                        <FormattedMessage id='home-header.speciality' />
                                    </b>
                                </div>
                                <div className='sub-title'>
                                    <FormattedMessage id='home-header.search-doctor' />
                                </div>
                            </div>
                            <div className='child-content'>
                                <div>
                                    <b>
                                        <FormattedMessage id='home-header.health-facility' />
                                    </b>
                                </div>
                                <div className='sub-title'>
                                    <FormattedMessage id='home-header.select-room' />
                                </div>
                            </div>
                            <div className='child-content'>
                                <div>
                                    <b>
                                        <FormattedMessage id='home-header.doctor' />
                                    </b>
                                </div>
                                <div className='sub-title'>
                                    <FormattedMessage id='home-header.select-doctor' />
                                </div>
                            </div>
                            <div className='child-content'>
                                <div>
                                    <b>
                                        <FormattedMessage id='home-header.fee' />
                                    </b>
                                </div>
                                <div className='sub-title'>
                                    <FormattedMessage id='home-header.check-health' />
                                </div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className='fas fa-question-circle'></i>
                                <FormattedMessage id='home-header.support' />
                            </div>
                            <div className='langueage-vi'>
                                <span className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'} onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span>
                            </div>
                            <div className='langueage-en'>
                                <span className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'} onClick={() => this.changeLanguage(LANGUAGES.EN)}>ENG</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'>
                            <FormattedMessage id='home-header-banner.platform' />
                        </div>
                        <div className='title2'>
                            <FormattedMessage id='home-header-banner.comprehensive-healthcare' />
                        </div>
                        <div className='search'>
                            <i className='fas fa-search'></i>
                            <input
                                className='search-input'
                                type='text'
                                placeholder='Tìm kiếm chuyên khoa khám'
                            />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-children'>
                                <div className='icon-children'>
                                    <i className='fal fa-hospital-alt fa-lg'></i>
                                </div>
                                <div className='icon-text'>
                                    <FormattedMessage id='home-header-banner.specialty-checkup' />
                                </div>
                            </div>
                            <div className='option-children'>
                                <div className='icon-children'>
                                    <i className='fal fa-phone-rotary fa-lg'></i>
                                </div>
                                <div className='icon-text'>
                                    <FormattedMessage id='home-header-banner.remote-checkup' />
                                </div>
                            </div>
                            <div className='option-children'>
                                <div className='icon-children'>
                                    <i className='fal fa-stethoscope'></i>
                                </div>
                                <div className='icon-text'>
                                    <FormattedMessage id='home-header-banner.general-checkup' />
                                </div>
                            </div>
                            <div className='option-children'>
                                <div className='icon-children'>
                                    <i className='fal fa-raindrops fa-lg'></i>
                                </div>
                                <div className='icon-text'>
                                    <FormattedMessage id='home-header-banner.medical-tests' />
                                </div>
                            </div>
                            <div className='option-children'>
                                <div className='icon-children'>
                                    <i className='fal fa-raindrops fa-lg'></i>
                                </div>
                                <div className='icon-text'>
                                    <FormattedMessage id='home-header-banner.mental-health' />
                                </div>
                            </div>
                            <div className='option-children'>
                                <div className='icon-children'>
                                    <i className='fal fa-raindrops fa-lg'></i>
                                </div>
                                <div className='icon-text'>
                                    <FormattedMessage id='home-header-banner.dental-checkup' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
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
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
