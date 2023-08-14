import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from "lodash";

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        };
    }

    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: '',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        }
    }

    toggle = () => {
        this.props.toggleUserModal()
    };

    handleOnChangeInput = (event, id) => {
        // Copy current state
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        }, () => {
            console.log(this.state);
        })
    };

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert("Missing parameter: " + arrInput[i]);
                break;
            }
        }

        return isValid;
    };

    handleEditNewUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid) {
            // call api edit user modal
            this.props.editUser(this.state);
        }
    };

    render() {
        return (
            <Modal
                isOpen={this.props.isOpenModal}
                toggle={false}
                className={'modal-container-user'}
                size={'lg'}
                centered
            >
                <ModalHeader toggle={() => { this.toggle() }} >
                    Edit a user
                </ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type='text' onChange={(event) => { this.handleOnChangeInput(event, 'email') }} value={this.state.email} disabled />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password' onChange={(event) => { this.handleOnChangeInput(event, 'password') }} value={this.state.password} disabled />
                        </div>
                        <div className='input-container'>
                            <label>First name</label>
                            <input type='text' onChange={(event) => { this.handleOnChangeInput(event, 'firstName') }} value={this.state.firstName} />
                        </div>
                        <div className='input-container'>
                            <label>Last name</label>
                            <input type='text' onChange={(event) => { this.handleOnChangeInput(event, 'lastName') }} value={this.state.lastName} />
                        </div>
                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input type='text' onChange={(event) => { this.handleOnChangeInput(event, 'address') }} value={this.state.address} />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => { this.handleEditNewUser() }}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={() => { this.toggle() }}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
