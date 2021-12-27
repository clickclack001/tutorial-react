import React, {useState} from 'react';


const TabsComponent = (props) => {
    const [activeTabId, setActiveTabId] = useState(0);

    return (
        <div className={'app-tabs'}>
            {props.tabs.map((tab) => (
                <div className={`tab ${activeTabId === tab.id ? 'active' : ''}`} key={tab.id} >
                    <input id={'tab-'+tab.id} type="checkbox" name={'tabs'}/>
                    <label onClick={() => setActiveTabId(tab.id)} htmlFor={'tab-'+tab.id}>{tab.title}</label>
                    <div className={'tab-content'}>
                        <p>{tab.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TabsComponent