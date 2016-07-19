/* eslint "react/prop-types": "warn" */
import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import S from "./List.css";

import Icon from "./Icon.jsx";
import Ellipsified from "./Ellipsified.jsx";

import cx from "classnames";
import pure from "recompose/pure";

//TODO: extend this to support functionality required for questions
const Item = ({ index, name, description, placeholder, url, icon }) =>
    <div className={cx(S.item)}>
        <div className={S.leftIcons}>
            { icon && <Icon className={S.chartIcon} name={icon} width={40} height={40} /> }
        </div>
        <div className={S.itemBody} style={ index === 0 ? {borderTop: 'none'} : {}}>
            <div className={S.itemTitle}>
                <Ellipsified className={S.itemName} tooltip={name} tooltipMaxWidth="100%">
                    { url ?
                        <Link to={url}>{name}</Link> :
                        {name}
                    }
                </Ellipsified>
            </div>
            <div className={cx(description ? S.itemSubtitle : S.itemSubtitleLight, { "mt1" : true })}>
                {description || placeholder || 'No description yet'}
            </div>
        </div>
    </div>

Item.propTypes = {
    name:               PropTypes.string.isRequired,
    index:              PropTypes.number.isRequired,
    url:                PropTypes.string,
    description:        PropTypes.string,
    placeholder:        PropTypes.string,
    icon:               PropTypes.string,
    isEditing:          PropTypes.bool,
    field:              PropTypes.object
};

export default pure(Item);
