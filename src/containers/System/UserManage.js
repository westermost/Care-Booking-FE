import React, { Component } from "react";
// import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userService';
import ModalUser from "./ModalUser";
import ModalEditUser from "./ModalEditUser";
import { emitter } from '../../utils/emitter';

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModal: false,
            isOpenEditModal: false,
            currentUser: {}
        };
    }

    async componentDidMount() {
        await this.getAllUserFromReact();
    }

    getAllUserFromReact = async () => {
        let res = await getAllUsers('All');
        if (res && res.errorCode === 0) {
            this.setState({
                arrUsers: res.users,
            })
        }
    };

    handleAddNewUser = () => {
        this.setState({
            isOpenModal: true
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }

    toggleEditUserModal = () => {
        this.setState({
            isOpenEditModal: !this.state.isOpenEditModal
        })
    }

    createNewUser = async (data) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.errorCode !== 0) {
                alert(res.message);
            } else {
                await this.getAllUserFromReact();
                this.setState({
                    isOpenModal: false
                })

                emitter.emit('EVENT_CLEAR_MODAL_DATA');
            }
        } catch (error) {
            console.log('error: ', error);
        }
    };

    editUser = async (user) => {
        console.log(user);
        try {
            let res = await editUserService(user);
            if (res && res.errorCode !== 0) {
                alert(res.message);
            } else {
                await this.getAllUserFromReact();
                this.setState({
                    isOpenEditModal: false
                })
            }
        } catch (error) {
            console.log('error: ', error);
        }
    };

    handleEditUser = async (user) => {
        console.log('edit user');
        this.setState({
            isOpenEditModal: true,
            currentUser: user
        })
    }

    handleDeleteUser = async (userId) => {
        let res = await deleteUserService(userId);
        if (res && res.errorCode !== 0) {
            alert(res.message);
        } else {
            await this.getAllUserFromReact();
        }
    }

    /**
     * Lifecycle of react
     * 1. constructor -> init state
     * 2. DidMount -> (set state) : born
     * 3. Render (re-render)
     *
     */
    render() {
        let users = this.state.arrUsers;

        return (
            <div className="user-container">
                <ModalUser
                    isOpenModal={this.state.isOpenModal}
                    toggleUserModal={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {
                    this.state.isOpenEditModal &&
                    <ModalEditUser
                        isOpenModal={this.state.isOpenEditModal}
                        toggleUserModal={this.toggleEditUserModal}
                        currentUser={this.state.currentUser}
                        editUser={this.editUser}
                    />
                }
                <div className="title text-center">Manage Users</div>
                <div className="mx-1 add-new-user">
                    <button
                        className="btn btn-primary btn-add"
                        onClick={() => this.handleAddNewUser()}
                    >
                        <i className="fas fa-user-plus"></i>
                        Add new user
                    </button>
                </div>
                <div className="users-table mt-3 mx-1">
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.email}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.address}</td>
                                        <td>
                                            <button className="btn-edit" onClick={() => this.handleEditUser(user)}>
                                                <i className="fa fa-edit" aria-hidden="true"></i>
                                            </button>
                                            <button className="btn-delete" onClick={() => this.handleDeleteUser(user.id)}>
                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
