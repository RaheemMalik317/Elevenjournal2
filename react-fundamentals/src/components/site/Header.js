import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    return(
        <header>
            <Navbar className ='header'>
                <NavbarBrand href = '/'>ReactLibrary</NavbarBrand>
                <NavItem>
                    <NavLink href = 'https://github.com/yourhandle/yourRepoForTHisApp'>
                        GitHub
                    </NavLink>
                </NavItem>
            </Navbar>
        </header>
    );
};

export default Header;