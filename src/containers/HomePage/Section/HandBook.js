import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HandBook.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

import handbookImg from '../../../assets/images/handbook/cay-collagen-tuoi.png';

class HandBook extends Component {
    render() {
        return (
            <div className='section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='section-title'>
                            <FormattedMessage id='section-handbook.popular-handbook' />
                        </span>
                        <button className='btn btn-section-more'>
                            <FormattedMessage id='section-handbook.see-more' />
                        </button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <img
                                    src={handbookImg}
                                    alt=''
                                />
                                <div>Hệ thống 1</div>
                            </div>
                            <div className='section-customize'>
                                <img
                                    src={handbookImg}
                                    alt=''
                                />
                                <div>Hệ thống 2</div>
                            </div>
                            <div className='section-customize'>
                                <img
                                    src={handbookImg}
                                    alt=''
                                />
                                <div>Hệ thống 3</div>
                            </div>
                            <div className='section-customize'>
                                <img
                                    src={handbookImg}
                                    alt=''
                                />
                                <div>Hệ thống 4</div>
                            </div>
                            <div className='section-customize'>
                                <img
                                    src={handbookImg}
                                    alt=''
                                />
                                <div>Hệ thống 5</div>
                            </div>
                            <div className='section-customize'>
                                <img
                                    src={handbookImg}
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
