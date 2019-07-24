import React from 'react';


const SettingForm = (props) => {
    const { user } = props.info;
    return (<div>{user.name}<SettingForm /></div>)
}
export default SettingForm;

