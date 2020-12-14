import React, {useState} from 'react';
import {NavLink as ReactRouterLink} from 'react-router-dom';
import {
    Background,
    Container,
    Logo,
    ButtonLink,
    Feature,
    FeatureCallOut,
    Text,
    Link,
    Group,
    Profile,
    Picture,
    Dropdown,
    Search,
    SearchIcon,
    SearchInput,
    PlayButton
} from './styles/header';

function Header({bg = true, children, ...restProps}) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({children, ...restProps}) {
    return <Feature {...restProps}>{children}</Feature>
};

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
};

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps} >
            <SearchIcon onClick={() => setSearchActive(!searchActive)} >
                <img src="/images/icons/search.png" alt="Search"/>
            </SearchIcon>

            <SearchInput
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Названия, люди, жанры"
                active={searchActive}
            >
            </SearchInput>

        </Search>
    )
};

Header.Picture = function HeaderPicture({src, ...restProps}) {
    return <Picture {...restProps} src={`/images/users/${src}.png`}/>
};

Header.Dropdown = function HeaderDropdown({children, ...restProps}) {
    return <Dropdown {...restProps}>{children}</Dropdown>
};

Header.Profile = function HeaderProfile({children, ...restProps}) {
    return <Profile {...restProps}>{children}</Profile>
};

Header.Text = function HeaderText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
};

Header.TextLink = function HeaderTextLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
};

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
};

Header.Group = function HeaderGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
};

Header.Logo = function HeaderLogo({to, ...restProps}) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
};

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
};

Header.PlayButton = function HeaderPlayButton({children, ...restProps}) {
    return <PlayButton {...restProps}>{children}</PlayButton>
};

export default Header;