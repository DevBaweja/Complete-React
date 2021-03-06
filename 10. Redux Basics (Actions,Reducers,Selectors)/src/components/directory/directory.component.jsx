import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import sections from './sections.data';
import './directory.styles.scss';

class Directory extends React.Component {
    state = {
        sections,
    };

    renderMenuItem = () => {
        return this.state.sections.map(({ id, ...other }) => <MenuItem key={id} {...other} />);
    };

    render() {
        return <div className="directory-menu">{this.renderMenuItem()}</div>;
    }
}

export default Directory;
