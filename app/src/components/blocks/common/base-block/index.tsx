import React from 'react';

import './styles.scss';

const BaseBlock : React.FC = (props) => {
    return <div className='block-container'>{props.children}</div>;
}

export default BaseBlock;