import React, {Component} from "react";
import classes from './layout.module.scss'

import MenuToggle from "../../Navigation/MenuToggle/MenuToggle";
import Drawer from "../../Navigation/Drawer/Drawer";

class Layout extends Component {
    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return( 
            <div className={classes.Layout}>
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler}
                />

                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
} 

export default Layout