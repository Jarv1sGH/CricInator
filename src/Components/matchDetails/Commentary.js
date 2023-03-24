import React from 'react'
import parse from 'html-react-parser';
import _ from 'lodash';
const Commentary = (props) => {
    const { commentaryList } = props;

    let commText = commentaryList?.commText
    let commentaryFormat = commentaryList?.commentaryFormats;
    let boldText = commentaryFormat?.bold?.formatValue[0];
    //Api returns special symbols for names or events like wickets and boundaries in the commentary text which can be replaced with the 
    // formatValue in the commentaryFormat  

    if (commentaryFormat?.bold?.formatId?.[1]) {
        // escaping special characters of regex using lodash escapeRegExp function
        const formatIdStr = _.escapeRegExp(commentaryFormat.bold.formatId[1]);
        const formatId = new RegExp(formatIdStr);
        commText = commText.replace(formatId, `<strong> ${commentaryFormat?.bold?.formatValue?.[1]} </strong>`)
    }
    if (commentaryFormat?.bold) {
        // escaping special characters of regex using lodash escapeRegExp function
        const formatIdStr = _.escapeRegExp(commentaryFormat?.bold?.formatId[0]);
        const formatId = new RegExp(formatIdStr, 'g');
        commText = commText.replace(formatId, `<strong> ${boldText} </strong>`)
    }
    if (commentaryFormat?.italic) {
        const formatIdStr = _.escapeRegExp(commentaryFormat?.italic?.formatId[0]);
        const formatId = new RegExp(formatIdStr, 'g');
        commText = commText.replace(formatId, `<b><i> ${commentaryFormat?.italic?.formatValue[0]} </i> </b>`)
    }

    return (
        <div>
            {
                commentaryList.overSeparator ?
                    <div className='last-over'>
                        <div ><p>{commentaryList?.overNumber + 0.4}</p></div>
                        <div className='last-over-wrapper'>
                            <div >
                                <p>Runs Scored: {commentaryList?.overSeparator?.runs}</p>
                                <p>{commentaryList?.overSeparator?.o_summary}</p>
                            </div>
                            <div>
                                <p>Score After {commentaryList?.overNumber + 0.4} overs</p>
                                <p> {commentaryList?.overSeparator?.batTeamName} {commentaryList?.overSeparator?.score}/{commentaryList?.overSeparator?.wickets}</p>
                            </div>
                            <div>
                                <p>{commentaryList?.overSeparator?.batStrikerNames[0]} {commentaryList?.overSeparator?.batStrikerRuns}({commentaryList?.overSeparator?.batStrikerBalls})</p>
                                <p>{commentaryList?.overSeparator?.batNonStrikerNames[0]} {commentaryList?.overSeparator?.batNonStrikerRuns}({commentaryList?.overSeparator?.batNonStrikerBalls})</p>
                            </div>
                            <div>
                                <p>{commentaryList?.overSeparator?.bowlNames[0]}</p>
                                <p> {commentaryList?.overSeparator?.bowlOvers}-{commentaryList?.overSeparator?.bowlMaidens}-{commentaryList?.overSeparator?.bowlRuns}-{commentaryList?.overSeparator?.bowlWickets}</p>
                            </div>
                        </div>
                    </div>
                    :
                    ""
            }
            <div className='commText'>
                <span>{commentaryList.overNumber}</span>
                <p>{parse(commText)}</p>
            </div>
        </div>
    )
}

export default Commentary