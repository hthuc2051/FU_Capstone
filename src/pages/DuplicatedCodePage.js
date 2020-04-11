import React, { Component } from 'react';
import { LeftSideBar, TopNavBar } from '../components/index';
import DuplicatedCodePageContainner from '../containers/DuplicatedCodePage/DuplicatedCodePageContainer'
import './style.css';


const PAGE_TITLE = 'DuplicatedCodePage';

class DuplicatedCodePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isViewDetail : false,
            duplicatedCodeDetails:[],
        }
    }

    viewDetail = (detail) => {
        let {isViewDetail,duplicatedCodeDetails} = this.state;
        isViewDetail = true;
        duplicatedCodeDetails = detail;
        console.log(detail);
        this.setState({isViewDetail,duplicatedCodeDetails});
    }

    render() {
        let { practicalExamCode } = this.props.match.params;
        let { studentCode } = this.props.match.params;
        let { isViewDetail } = this.state;
        return (
            <div>
                <div>
                    {/* Top navigation */}
                    <TopNavBar pageTitle={PAGE_TITLE} />
                    <div id="wrapper" className="admin-page">
                        {/* Container */}
                        {
                            isViewDetail ? '' :
                                <DuplicatedCodePageContainner practicalExamCode={practicalExamCode} studentCode={studentCode} viewDetail={this.viewDetail} />
                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default DuplicatedCodePage;