import React, {Component} from 'react';
import EllipsisToolTip from "ellipsis-tooltip-react-chan";

const ellipsisToolTipOptions = {
    effect: "solid",
    place: "top",
}

class SearchUserResult extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={"container p-2 border-primary m-1  rounded"} style={{border:'2px solid',width:'inherit'}}>
                <div className={"d-flex flex-row"}>
                    <img className={"rounded-circle align-self-center mr-3"} src={this.props.profile} height={"50px"}/>
                    <div className={'align-self-center '} style={{maxWidth:"calc(100% - 115px)"}}>
                        <EllipsisToolTip options={ellipsisToolTipOptions}>
                        {this.props.email}
                        </EllipsisToolTip>
                    </div>
                    <div className={'ml-auto'}>
                        <button className={'ml-auto btn transparent-button'}>
                            {this.props.isFriend?
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                 className="bi bi-person-check" viewBox="0 0 16 16">
                                <path
                                    d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                <path fill-rule="evenodd"
                                      d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                            </svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                 className="bi bi-person-plus" viewBox="0 0 16 16">
                                <path
                                    d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                <path fill-rule="evenodd"
                                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchUserResult;
