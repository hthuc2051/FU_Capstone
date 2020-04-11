import React, { Component } from 'react';
import { LeftSideBar, TopNavBar } from '../components/index';
import DuplicatedCodePageContainner from '../containers/DuplicatedCodePage/DuplicatedCodePageContainer'
import DuplicatedCodeDetailContainner from '../containers/DuplicatedCodePage/DuplicatedCodeDetailContainer'
import './style.css';


const PAGE_TITLE = 'DuplicatedCodePage';

class DuplicatedCodePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isViewDetail : false
        }
    }

    viewDetail = (id) => {
        let {isViewDetail} = this.state;
        isViewDetail = true;
        this.setState({isViewDetail});
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
                            isViewDetail ? <DuplicatedCodeDetailContainner/> :
                                <DuplicatedCodePageContainner practicalExamCode={practicalExamCode} studentCode={studentCode} viewDetail={this.viewDetail} />
                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default DuplicatedCodePage;