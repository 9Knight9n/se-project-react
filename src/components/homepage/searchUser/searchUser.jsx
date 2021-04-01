import React, {Component,Fragment} from 'react';
import './searchUser.css'
import {Link} from "react-router-dom";
import SearchUserResult from "./searchUserResult";
import icon from '../../../assets/img/default-profile-picture.jpg'
import EllipsisToolTip from "ellipsis-tooltip-react-chan";

const ellipsisToolTipOptions = {
    effect: "solid",
    place: "top",
}

class SearchUser extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        focused:false,
        panelOpened:true,
        searchInput:"knidwdwddwdwdwwdwwdwdwdw",
        suggestions:[{email:"9knight9n@gmail9knight9n@gmail.com .com",profile:icon,isFriend:true},{email:"sajad@te.st",profile:icon,isFriend:false}],
    }

    componentDidMount(){
        document.addEventListener("mousedown",this.handleClick,false)
    }
    componentWillUnmount(){
        document.removeEventListener("mousedown",this.handleClick,false)
    }

    handleClick=(e)=>{
        if(!document.getElementById("search-user").contains(e.target))
        {
            this.setState({focused:false,panelOpened:false,searchInput:""})
        }
    }

    handleSearch=()=>{
        if(!this.state.focused)
        {
            let input = document.getElementById('search-input-field');
            input.focus();
            input.select();
        }
        else
            this.setState({panelOpened:false,searchInput:""})
        this.setState({focused:!this.state.focused})

    }


    handleInputChange=(event)=>{
        let input = event.target.value;
        this.setState({searchInput:input})
        if (input.length >2)
        {
            // toast.dismiss()
            this.setState({panelOpened:true})
            this.loadSuggestions(input);
        }
        else
            this.setState({panelOpened:false,suggestions:[]})
    }

    loadSuggestions= async (input)=>{
        // let config ={
        //     url:"http://127.0.0.1:8000/api/SeggestionChatroomSreach/",
        //     needToken:true,
        //     type:"post",
        //     formKey:[
        //         "searchText",
        //     ],
        //     formValue:[
        //         input,
        //     ]
        // }
        // let data = []
        // // console.log("outside 0",data)
        // data = await request(config)
        // // console.log(await request(config))
        // // console.log("outside",data)
        // if (data)
        // {
        //     this.setState({suggestions:data,})
        //     console.log("state set")
        // }
    }

    quickSelect=(id)=>{
        this.setState({searchInput:"",panelOpened:false,focused:false,suggestions:[]})
    }

    render() {
        return (
            <Fragment>
                <div id='search-user' className="d-flex flex-row col-xl-4 col-lg-6 col-md-8 col-sm-12">
                    <div style={{width:'inherit'}}>
                        <div id='bar' className={"ml-auto d-flex flex-row-reverse".concat(this.state.focused?" active ":"")}>
                            <input value={this.state.searchInput}
                                   onChange={this.handleInputChange} onKeyDown={this._handleKeyDown}
                                   className=" form-control shadow-none" placeholder="Search" id="search-input-field"/>
                        </div>
                        <div id='panel' className={"mt-2 ".concat(this.state.panelOpened?" active":"")}>
                            {/*<div id='search-sub-panel1' className={"ml-3 mr-3 mt-3".concat(this.state.panelOpened?" ":" display-none")}>*/}
                            {/*    <EllipsisToolTip options={ellipsisToolTipOptions}>*/}
                            {/*        {this.state.suggestions.length>0?*/}
                            {/*        "users matching ".concat(this.state.searchInput)*/}
                            {/*        :"can't find any user matching ".concat(this.state.searchInput)}*/}
                            {/*    </EllipsisToolTip>*/}
                            {/*</div>*/}
                        <div id='search-sub-panel2' className={"search-result".concat(this.state.suggestions.length>0 && this.state.searchInput !== ""?" active":"")}>
                            {this.state.panelOpened?
                            this.state.suggestions.map(sug =>
                                    <SearchUserResult email={sug.email} profile={sug.profile} isFriend={sug.isFriend}/>
                                ):""}

                            </div>
                        </div>
                    </div>

                    <button onClick={this.handleSearch}
                            className="shadow-none rounded-circle d-flex flex-row
                                    transparent-button btn-outline-primary">
                        {this.state.focused?
                        <svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" fill="currentColor"
                             className="bi bi-x align-self-center" viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>:
                        <svg width="27px" height="27px" viewBox="0 0 16 16" className=" bi bi-search align-self-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        </svg>}
                    </button>

                </div>
            </Fragment>

        );
    }
}

export default SearchUser;
